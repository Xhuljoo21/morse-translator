import React, { useState, useCallback } from 'react';
import { TranslatorHeader } from './components/TranslatorHeader';
import { TranslatorInput } from './components/TranslatorInput';
import { TranslatorOutput } from './components/TranslatorOutput';
import { TranslatorTips } from './components/TranslatorTips';
import { textToMorse, morseToText } from './utils/morseCode';
import { playMorseAudio, stopMorseAudio } from './utils/audio';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'text-to-morse' | 'morse-to-text'>('text-to-morse');
  const [playing, setPlaying] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    setOutput(mode === 'text-to-morse' ? textToMorse(newInput) : morseToText(newInput));
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode(prev => prev === 'text-to-morse' ? 'morse-to-text' : 'text-to-morse');
    setInput('');
    setOutput('');
  }, []);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(output);
  }, [output]);

  const reset = useCallback(() => {
    setInput('');
    setOutput('');
  }, []);

  const playMorseCode = useCallback(() => {
    playMorseAudio(output);
    setPlaying(true);
  }, [output]);

  const stopMorseCode = useCallback(() => {
    stopMorseAudio();
    setPlaying(false);
  }, [output]);

  return (
    <div className="min-h-screen p-6 'bg-gray-100' bg-gray-100 dark:bg-black">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"> 
          <TranslatorHeader mode={mode} onToggleMode={toggleMode} />
          
          <div className="space-y-6">
            <TranslatorInput
              mode={mode}
              value={input}
              onChange={handleInputChange}
            />

            <TranslatorOutput
              mode={mode}
              output={output}
              onReset={reset}
              onCopy={copyToClipboard}
              onPlay={playMorseCode}
              onStop={stopMorseCode}
              playing={playing}
            />
          </div>

          <TranslatorTips />
        </div>
      </div>
    </div>
  );
}

export default App;
