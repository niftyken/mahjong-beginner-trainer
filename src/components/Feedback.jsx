import { motion } from 'framer-motion'

export default function Feedback({ correct, text, hint }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`feedback ${correct ? 'good' : ''}`}
    >
      <div>
        <strong>{correct ? 'Nice — here’s why' : 'Not quite — here’s why'}</strong>
      </div>
      <div className="small" style={{ marginTop: 6 }}>
        {text}
      </div>
      <div className="hint small">
        <strong>Beginner hint:</strong> {hint}
      </div>
    </motion.div>
  )
}