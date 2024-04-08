// darkmode.js
import { useState, useEffect } from 'react';

// Function to toggle between dark and light mode
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle mode
  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return [isDarkMode, toggleMode];
}

// Function to apply dark mode styles
export function applyDarkModeStyles(isDarkMode) {
  return isDarkMode ? 'dark-mode' : 'light-mode';
}

// Function to persist user preference in local storage
export function saveModePreference(isDarkMode) {
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}

// Function to retrieve user preference from local storage
export function loadModePreference() {
  const darkMode = localStorage.getItem('darkMode');
  return darkMode ? JSON.parse(darkMode) : false;
}
