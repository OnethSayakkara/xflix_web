import React from 'react';
import { useTranslation } from 'react-google-multi-lang';

const CustomLanguageSwitcher = () => {
  const { setLanguage } = useTranslation();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('es')}>Spanish</button>
      <button onClick={() => setLanguage('fr')}>French</button>
      <button onClick={() => setLanguage('si')}>Sinhala</button>
      <button onClick={() => setLanguage('ja')}>Japan</button>
    </div>
  );
};

export default CustomLanguageSwitcher;
