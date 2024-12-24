import React from 'react';

export function TranslatorTips() {
  return (
    <div className="mt-8 text-sm text-gray-500 dark:text-white">
      <p>Tips:</p>
      <ul className="list-disc list-inside">
        <li>Use dots (.) and dashes (-) for Morse code input</li>
        <li>Separate letters with spaces</li>
        <li>Use forward slash (/) to separate words</li>
      </ul>
    </div>
  );
}