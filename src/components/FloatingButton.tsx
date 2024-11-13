import React, { type ReactNode } from 'react'
interface FloatingButtonProps {
    route: string
    position?: string
    children : ReactNode
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  route,
  position="fixed",
  children,
}) => {
  const handleClick = () => {
    window.open(route, '_blank')
  }
  return (
    <button
      onClick={handleClick}
      aria-label="Abrir chat de WhatsApp"
      className={`${position} bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-lg focus:outline-none`}
    >
      {children}
    </button>
  )
}
export default FloatingButton