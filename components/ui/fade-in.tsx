'use client'

import { ReactNode } from 'react'
import * as motion from 'motion/react-client'

interface FadeInProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  marginTop?: number
}

export default function FadeIn({
  children,
  className = '',
  duration = 1.5,
  delay = 0,
  marginTop = -40,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, marginTop: marginTop }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
