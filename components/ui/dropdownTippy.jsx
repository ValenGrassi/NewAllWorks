// components/ui/DropdownTippy.jsx
"use client"

import React, { useRef } from "react"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

/**
 * DropdownTippy
 * Props:
 * - trigger: JSX element (ej: <span>Servicios</span>)
 * - children: JSX (contenido del menú)
 * - placement, delay, interactive, appendTo: pasados a Tippy
 *
 * Uso: <DropdownTippy trigger={<Trigger />}> ...menu items... </DropdownTippy>
 */
export default function DropdownTippy({
  trigger,
  children,
  placement = "bottom-start",
  delay = [80, 180],
  interactive = true,
  appendTo = typeof document !== "undefined" ? document.body : undefined,
  visible,        // opcional: si querés control externo
  onVisibleChange // opcional: callback visibility change
}) {
  const triggerRef = useRef(null)

  return (
    <Tippy
      content={children}
      interactive={interactive}
      placement={placement}
      delay={delay}
      appendTo={appendTo}
      theme="light-dropdown"
      // allow HTML (we pass react node as content)
      // controlled visibility optional:
      visible={visible}
      onClickOutside={() => onVisibleChange?.(false)}
      onHidden={() => onVisibleChange?.(false)}
      onShow={() => onVisibleChange?.(true)}
    >
      {/* Ensure the trigger is an element that Tippy can attach to */}
      <span ref={triggerRef} className="inline-flex items-center">
        {trigger}
      </span>
    </Tippy>
  )
}

