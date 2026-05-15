import { useEffect, useRef, useState } from 'react'

const INTRO_TOTAL_MS = 5000
const INTRO_CLOSE_MS = 4200

const SignatureIntro = ({ onComplete }) => {
  const [isClosing, setIsClosing] = useState(false)
  const timeoutRefs = useRef([])

  useEffect(() => {
    const closeId = window.setTimeout(() => {
      setIsClosing(true)
    }, INTRO_CLOSE_MS)

    const completeId = window.setTimeout(() => {
      onComplete?.()
    }, INTRO_TOTAL_MS)

    timeoutRefs.current.push(closeId, completeId)

    return () => {
      timeoutRefs.current.forEach((id) => window.clearTimeout(id))
      timeoutRefs.current = []
    }
  }, [onComplete])

  return (
    <div
      className={`signature-intro ${isClosing ? 'signature-intro-closing' : ''}`}
      aria-label="Chandu signature introduction animation"
      role="presentation"
    >
      <div className="signature-noise" aria-hidden="true" />
      <div className="signature-glow" aria-hidden="true" />
      <div className="signature-glass" aria-hidden="true" />

      <div className="signature-stage">
        <p className="signature-tag">Portfolio by</p>

        <svg
          className="signature-mark"
          viewBox="0 0 1000 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <text x="49%" y="62%" textAnchor="middle" className="signature-script-draw">
            Chandu
          </text>
          <path
            className="signature-stroke signature-stroke-flourish"
            d="M120 116C276 52 438 44 632 80"
          />
          <path
            className="signature-stroke signature-stroke-swish"
            d="M326 206C468 220 658 206 918 160"
          />
        </svg>
      </div>

      <div className="signature-shutter shutter-top" aria-hidden="true" />
      <div className="signature-shutter shutter-bottom" aria-hidden="true" />
    </div>
  )
}

export default SignatureIntro
