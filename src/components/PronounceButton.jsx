import { Volume2 } from 'lucide-react'
import { speak } from '../utils/speak'

export default function PronounceButton({ text }) {
  return (
    <button
      className="ghost"
      onClick={() => speak(text)}
      type="button"
      aria-label={`Play ${text}`}
    >
      <Volume2 size={16} />
    </button>
  )
}