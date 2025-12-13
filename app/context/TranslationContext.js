"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { combinedTranslations } from '../translations';
import useLocalStorage from '../hooks/useLocalStorage';

const TranslationContext = createContext(undefined);

const translations = {
  en: { ...combinedTranslations.en },
  ar: { ...combinedTranslations.ar },
};

export const TranslationProvider = ({ children }) => {
  const [storedValue, setStoredValue] = useLocalStorage('language', 'en');
  const [language, setLanguage] = useState('en'); // default 'en' on server
  const [hydrated, setHydrated] = useState(false); // wait for client hydration

  useEffect(() => {
    // This runs only on client after hydration
    setLanguage(storedValue);
    setHydrated(true);
    updateRootFont(storedValue);
    document.documentElement.dir = storedValue === 'ar' ? 'rtl' : 'ltr';
  }, [storedValue]);

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const updateLanguage = (lan) => {
    setLanguage(lan);
    setStoredValue(lan);
    updateRootFont(lan);
    document.documentElement.dir = lan === 'ar' ? 'rtl' : 'ltr';
  };

  const translate = (key) => translations[language][key] || key;

  function updateRootFont(lang) {
    // Optional: update font if needed
  }

  // Render nothing until hydration to avoid SSR mismatch
  if (!hydrated) return null;

  return (
    <TranslationContext.Provider
      value={{ language, updateLanguage, direction, translate, updateRootFont }}
    >
      <div dir={direction}>{children}</div>
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslation must be used within a TranslationProvider');
  return context;
};
