export function speak(text) {
    if (!('speechSynthesis' in window)) return
  
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-HK'
    utterance.rate = 0.85
  
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }