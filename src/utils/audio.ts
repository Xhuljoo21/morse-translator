
let activeOscillators : OscillatorNode[] = [];

export function playMorseAudio(morseCode: string): void {
  const audioContext = new AudioContext();
  const dot = 100; // Duration of a dot in milliseconds
  const dash = dot * 3;
  const symbolGap = dot;
  const letterGap = dot * 3;
  const wordGap = dot * 7;

  let currentTime = audioContext.currentTime;

  morseCode.split('').forEach((symbol) => {
    if (symbol === '.' || symbol === '-') {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 600;
      gainNode.gain.value = 0.1;
      
      const duration = symbol === '.' ? dot : dash;
      
      oscillator.start(currentTime);
      oscillator.stop(currentTime + duration / 1000);
      
      // Store the oscillator to stop it later
      activeOscillators.push(oscillator);
      
      currentTime += (duration + symbolGap) / 1000;
    } else if (symbol === ' ') {
      currentTime += (letterGap - symbolGap) / 1000;
    } else if (symbol === '/') {
      currentTime += (wordGap - symbolGap) / 1000;
    }
  });
}

// Function to stop all playing audio
export function stopMorseAudio(): void {
  // Stop all active oscillators
  activeOscillators.forEach(oscillator => oscillator.stop());
  // Clear the array of active oscillators
  activeOscillators = [];
}
