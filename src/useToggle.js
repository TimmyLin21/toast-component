import React from "react";

export default function useToggle(initialValue) {
  const [isOpen, setIsOpen] = React.useState(initialValue);

  if (typeof initialValue !== "boolean") {
    throw new Error(`Oops! ${initialValue} is not a boolean value.`);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }
  return { isOpen, onOpen, onClose, onToggle };
}
