import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const classes = ['reveal', isVisible && 'is-visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default Reveal
