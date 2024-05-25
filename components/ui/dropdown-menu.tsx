import React from "react";
import classNames from "classnames";
interface DropdownMenuProps {
  children: React.ReactNode;
}

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  align?: "start" | "end";
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="relative">{children}</div>;
}

export function DropdownMenuTrigger({
  children,
  asChild,
}: DropdownMenuTriggerProps) {
  return (
    <div className={classNames({ "inline-block": asChild })}>{children}</div>
  );
}

export function DropdownMenuContent({
  children,
  align = "start",
}: DropdownMenuContentProps) {
  const alignClasses = align === "end" ? "right-0" : "left-0";
  return (
    <div className={`absolute ${alignClasses} mt-2 w-48 bg-white shadow-lg`}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }: DropdownMenuItemProps) {
  return (
    <div
      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
