let SpeechRecognition;

if ('webkitSpeechRecognition' in window) {
  // Chrome
  SpeechRecognition = window.webkitSpeechRecognition;
} else if ('SpeechRecognition' in window) {
  // Standard
  SpeechRecognition = window.SpeechRecognition;
} else {
  // API not supported
  console.error('Speech Recognition API is not supported in this browser');
}

export const recognition = new SpeechRecognition();
