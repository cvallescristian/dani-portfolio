import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './KeywordRotator.css'

const INTERVAL_MS = 2500

type KeywordRotatorProps = {
  words: string[]
}

function KeywordRotator({ words }: KeywordRotatorProps) {
  const [{ index, previous }, setState] = useState<{ index: number; previous: number | null }>({
    index: 0,
    previous: null,
  })
  const containerRef = useRef<HTMLSpanElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setState((current) => ({
        index: (current.index + 1) % words.length,
        previous: current.index,
      }))
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [words.length])

  // The pill width follows the active word, so it is measured from the DOM.
  useLayoutEffect(() => {
    const container = containerRef.current
    const word = wordRefs.current[index]
    if (!container || !word) return
    const padding = parseFloat(getComputedStyle(container).paddingLeft) * 2
    container.style.width = `${word.offsetWidth + padding}px`
  }, [index])

  function wordClass(i: number) {
    if (i === index) return 'keyword-rotator__word is-active'
    if (i === previous) return 'keyword-rotator__word is-leaving'
    return 'keyword-rotator__word'
  }

  return (
    <>
      <span className="visually-hidden">{words.join(', ')}</span>
      <span ref={containerRef} className="keyword-rotator" aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={word}
            ref={(element) => {
              wordRefs.current[i] = element
            }}
            className={wordClass(i)}
          >
            {word}
          </span>
        ))}
      </span>
    </>
  )
}

export default KeywordRotator
