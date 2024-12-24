import React from 'react';

interface TranslatorInputProps {
  mode: 'text-to-morse' | 'morse-to-text';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TranslatorInput({ mode, value, onChange }: TranslatorInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">
        {mode === 'text-to-morse' ? 'Enter Text' : 'Enter Morse Code'}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder={mode === 'text-to-morse' 
          ? 'Type your message here...' 
          : 'Enter Morse code (use dots and dashes)...'}
      />
    </div>
  );
}