import React from "react";
import { BrainCircuit } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface TranslatorHeaderProps {
  mode: "text-to-morse" | "morse-to-text";
  onToggleMode: () => void;
}

export function TranslatorHeader({
  mode,
  onToggleMode,
}: TranslatorHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <BrainCircuit className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Morse Code Translator
        </h1>
      </div>
      <div className="flex items-center gap-3 ml-3">
        <ThemeToggle />
        <button
          onClick={onToggleMode}
          className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
        >
          {mode === "text-to-morse"
            ? "Switch to Morse → Text"
            : "Switch to Text → Morse"}
        </button>
      </div>
    </div>
  );
}
