import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOverlay } from "./useOverlay";

export interface PopoverBaseProps {
  children: React.ReactNode;
  triggerRef: React.MutableRefObject<HTMLDivElement>;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export function PopoverBase({ children, triggerRef, isOpen, onClose, onOpen }: PopoverBaseProps) {
  let { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true
    },
    triggerRef
  );

  const [_isOpen, _setIsOpen] = React.useState(false);
  const controlled = isOpen !== undefined;

  // helper function to close the menu
  function _close() {
    _setIsOpen(false);
    if (onClose) onClose();
  }

  function _open() {
    _setIsOpen(true);
    if (onOpen) onOpen();
  }

  const open = controlled ? () => null : _open;
  const close = controlled ? onClose : _close;

  return <div></div>;
}
