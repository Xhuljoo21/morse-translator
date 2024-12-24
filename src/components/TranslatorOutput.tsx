import React from 'react';
import { Volume2, Copy, RotateCcw, StopCircle } from 'lucide-react';

interface TranslatorOutputProps {
  mode: 'text-to-morse' | 'morse-to-text';
  output: string;
  playing: boolean;
  onReset: () => void;
  onCopy: () => void;
  onPlay: () => void;
  onStop : ()=>void;
}

export function TranslatorOutput({ mode, output, onReset, onCopy, onPlay, onStop, playing }: TranslatorOutputProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">
          {mode === 'text-to-morse' ? 'Morse Code' : 'Translated Text'}
        </label>
        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={onCopy}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-5 h-5" />
          </button>
          {mode === 'text-to-morse' && (
            <button
              onClick={onPlay}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              title="Play morse code"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
          {mode === 'text-to-morse' && playing && (
            <button
              onClick={onStop}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              title="Play morse code"
            >
              <StopCircle className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      <div className="w-full min-h-32 p-4 bg-gray-50 border border-gray-300 rounded-lg">
        {output}
      </div>
    </div>
  );
}