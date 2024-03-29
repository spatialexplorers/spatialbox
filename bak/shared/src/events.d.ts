import { FocusEvent, KeyboardEvent as ReactKeyboardEvent, SyntheticEvent } from "react";

// Event bubbling can be problematic in real-world applications, so the default for React Spectrum components
// is not to propagate. This can be overridden by calling continuePropagation() on the event.
export type BaseEvent<T extends SyntheticEvent> = T & {
  /** @deprecated Use continuePropagation. */
  stopPropagation(): void;
  continuePropagation(): void;
};

export type KeyboardEvent = BaseEvent<ReactKeyboardEvent<any>>;

export type PointerType = "mouse" | "pen" | "touch" | "keyboard" | "virtual";

export interface PressEvent {
  /** The type of press event being fired. */
  type: "pressstart" | "pressend" | "pressup" | "press";
  /** The pointer type that triggered the press event. */
  pointerType: PointerType;
  /** The target element of the press event. */
  target: HTMLElement;
  /** Whether the shift keyboard modifier was held during the press event. */
  shiftKey: boolean;
  /** Whether the ctrl keyboard modifier was held during the press event. */
  ctrlKey: boolean;
  /** Whether the meta keyboard modifier was held during the press event. */
  metaKey: boolean;
  /** Whether the alt keyboard modifier was held during the press event. */
  altKey: boolean;
}

export interface HoverEvent {
  /** The type of hover event being fired. */
  type: "hoverstart" | "hoverend";
  /** The pointer type that triggered the hover event. */
  pointerType: "mouse" | "pen";
  /** The target element of the hover event. */
  target: HTMLElement;
}

export interface KeyboardEvents {
  /** Handler that is called when a key is pressed. */
  onKeyDown?: (e: KeyboardEvent) => void;
  /** Handler that is called when a key is released. */
  onKeyUp?: (e: KeyboardEvent) => void;
}

export interface FocusEvents {
  /** Handler that is called when the element receives focus. */
  onFocus?: (e: FocusEvent) => void;
  /** Handler that is called when the element loses focus. */
  onBlur?: (e: FocusEvent) => void;
  /** Handler that is called when the element's focus status changes. */
  onFocusChange?: (isFocused: boolean) => void;
}

export interface HoverEvents {
  /** Handler that is called when a hover interaction starts. */
  onHoverStart?: (e: HoverEvent) => void;
  /** Handler that is called when a hover interaction ends. */
  onHoverEnd?: (e: HoverEvent) => void;
  /** Handler that is called when the hover state changes. */
  onHoverChange?: (isHovering: boolean) => void;
}

export interface PressEvents {
  /** Handler that is called when the press is released over the target. */
  onPress?: (e: PressEvent) => void;
  /** Handler that is called when a press interaction starts. */
  onPressStart?: (e: PressEvent) => void;
  /**
   * Handler that is called when a press interaction ends, either
   * over the target or when the pointer leaves the target.
   */
  onPressEnd?: (e: PressEvent) => void;
  /** Handler that is called when the press state changes. */
  onPressChange?: (isPressed: boolean) => void;
  /**
   * Handler that is called when a press is released over the target, regardless of
   * whether it started on the target or not.
   */
  onPressUp?: (e: PressEvent) => void;
}

export interface FocusableProps extends FocusEvents, KeyboardEvents {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
}

interface BaseMoveEvent {
  /** The pointer type that triggered the move event. */
  pointerType: PointerType;
}

export interface MoveStartEvent extends BaseMoveEvent {
  /** The type of move event being fired. */
  type: "movestart";
}

export interface MoveMoveEvent extends BaseMoveEvent {
  /** The type of move event being fired. */
  type: "move";
  /** The amount moved in the X direction since the last event. */
  deltaX: number;
  /** The amount moved in the Y direction since the last event. */
  deltaY: number;
}

export interface MoveEndEvent extends BaseMoveEvent {
  /** The type of move event being fired. */
  type: "moveend";
}

export type MoveEvent = MoveStartEvent | MoveMoveEvent | MoveEndEvent;

export interface MoveEvents {
  /** Handler that is called when a move interaction starts. */
  onMoveStart?: (e: MoveStartEvent) => void;
  /** Handler that is called when the element is moved. */
  onMove?: (e: MoveMoveEvent) => void;
  /** Handler that is called when a move interaction ends. */
  onMoveEnd?: (e: MoveEndEvent) => void;
}

export interface ScrollEvent {
  /** The amount moved in the X direction since the last event. */
  deltaX: number;
  /** The amount moved in the Y direction since the last event. */
  deltaY: number;
}

export interface ScrollEvents {
  /** Handler that is called when the scroll wheel moves. */
  onScroll?: (e: ScrollEvent) => void;
}
