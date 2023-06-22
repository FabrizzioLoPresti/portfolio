'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type Props = {}

const CursorFollow = (props: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div
      className="fixed top-0 left-0 w-10 h-10 bg-transparent border border-gray-400 rounded-full pointer-events-none animate-pulse"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  )
}

export default CursorFollow