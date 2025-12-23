'use client'

import { ReactNode } from 'react'
import * as motion from 'motion/react-client'

interface FadeInProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
}

export default function FadeIn({
  children,
  className = '',
  duration = 1.5,
  delay = 0,
  yOffset = 20,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
