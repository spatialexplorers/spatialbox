import * as React from "react";
import { HTMLAttributes } from "react";
import { HoverEvents } from "@spatialbox/shared";

export interface HoverProps extends HoverEvents {
  /** Whether the hover events should be disabled. */
  isDisabled?: boolean;
}

interface HoverResult {
  /** Props to spread on the target element. */
  hoverProps: HTMLAttributes<HTMLElement>;
  isHovered: boolean;
}

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let globalIgnoreEmulatedMouseEvents = false;
let hoverCount = 0;

function setGlobalIgnoreEmulatedMouseEvents() {
  globalIgnoreEmulatedMouseEvents = true;

  // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
  // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
  // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
  // the distant future because a user previously touched the element.
  setTimeout(() => {
    globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}

function handleGlobalPointerEvent(e: any) {
  if (e.pointerType === "touch") {
    setGlobalIgnoreEmulatedMouseEvents();
  }
}

function setupGlobalTouchEvents() {
  if (typeof document === "undefined") {
    return;
  }

  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerup", handleGlobalPointerEvent);
  } else {
    document.addEventListener("touchend", setGlobalIgnoreEmulatedMouseEvents);
  }

  hoverCount++;
  return () => {
    hoverCount--;
    if (hoverCount > 0) {
      return;
    }

    if (typeof PointerEvent !== "undefined") {
      document.removeEventListener("pointerup", handleGlobalPointerEvent);
    } else {
      document.removeEventListener("touchend", setGlobalIgnoreEmulatedMouseEvents);
    }
  };
}

export function useHover(props: HoverProps): HoverResult {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;

  let [isHovered, setHovered] = React.useState(false);
  let state = React.useRef({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;

  React.useEffect(setupGlobalTouchEvents, []);

  let { hoverProps, triggerHoverEnd } = React.useMemo(() => {
    let triggerHoverStart = (event: any, pointerType: any) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) {
        return;
      }

      state.isHovered = true;
      let target = event.target;
      state.target = target;

      if (onHoverStart) {
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      }

      if (onHoverChange) {
        onHoverChange(true);
      }

      setHovered(true);
    };

    let triggerHoverEnd = (event: any, pointerType: any) => {
      state.pointerType = "";
      state.target = null;

      if (pointerType === "touch" || !state.isHovered) {
        return;
      }

      state.isHovered = false;
      let target = event.target;
      if (onHoverEnd) {
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      }

      if (onHoverChange) {
        onHoverChange(false);
      }

      setHovered(false);
    };

    let hoverProps: HTMLAttributes<HTMLElement> = {};

    if (typeof PointerEvent !== "undefined") {
      hoverProps.onPointerEnter = (e) => {
        if (globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") {
          return;
        }

        triggerHoverStart(e, e.pointerType);
      };

      hoverProps.onPointerLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target as HTMLElement)) {
          triggerHoverEnd(e, e.pointerType);
        }
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };

      hoverProps.onMouseEnter = (e) => {
        if (!state.ignoreEmulatedMouseEvents && !globalIgnoreEmulatedMouseEvents) {
          triggerHoverStart(e, "mouse");
        }

        state.ignoreEmulatedMouseEvents = false;
      };

      hoverProps.onMouseLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target as HTMLElement)) {
          triggerHoverEnd(e, "mouse");
        }
      };
    }
    return { hoverProps, triggerHoverEnd };
  }, [onHoverStart, onHoverChange, onHoverEnd, isDisabled, state]);

  React.useEffect(() => {
    // Call the triggerHoverEnd as soon as isDisabled changes to true
    // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
    if (isDisabled) {
      triggerHoverEnd({ target: state.target }, state.pointerType);
    }
  }, [isDisabled]);

  return {
    hoverProps,
    isHovered
  };
}
