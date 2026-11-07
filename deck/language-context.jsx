import React, {createContext, useContext, useLayoutEffect, useRef, useState} from 'react';
import {korean} from './korean.mjs';

const LanguageContext = createContext(null);
const normalize = value => value.replace(/\s+/g, ' ').trim();

export function translate(value) {
  const key = normalize(value);
  if (Object.hasOwn(korean, key)) return value.replace(value.trim(), korean[key]);
  const patterns = [
    [/^(USD|EUR|GBP|KRW|JPY|AUD|INR) per year(.*)$/, (_, currency, note) => currency + ' · 연간' + (note ? ' · 환산 추정치' : '')],
    [/^(USD|EUR|GBP|KRW|JPY|AUD|INR) per proposal(.*)$/, (_, currency, note) => currency + ' · 제안서당' + (note ? ' · 환산 추정치' : '')],
    [/^Approximately (\d+) hours$/, (_, hours) => '약 ' + hours + '시간'],
    [/^Open full-size screenshot: (.+)$/, (_, stage) => '전체 화면 열기 · ' + (korean[stage] || stage)],
    [/^(.+), (≈ .+)$/, (_, label, amount) => (korean[label] || label) + ', ' + amount],
  ];
  for (const [pattern, replacement] of patterns) {
    if (pattern.test(key)) return value.replace(value.trim(), key.replace(pattern, replacement));
  }
  return value;
}

export function LanguageProvider({children}) {
  const [language, setLanguage] = useState(() =>
    new URLSearchParams(location.search).get('lang') === 'ko' ? 'ko' : 'en'
  );
  const originals = useRef(new Map());

  useLayoutEffect(() => {
    const update = event => setLanguage(event.detail === 'ko' ? 'ko' : 'en');
    window.addEventListener('deck-language', update);
    return () => window.removeEventListener('deck-language', update);
  }, []);

  useLayoutEffect(() => {
    const root = document.body;
    const records = originals.current;
    const attributes = ['aria-label', 'alt', 'title', 'placeholder'];
    function apply(node, attribute) {
      const current = attribute ? node.getAttribute(attribute) : node.data;
      if (!current) return;
      let record = records.get(node);
      if (!record) {
        record = new Map();
        records.set(node, record);
      }
      const previous = record.get(attribute);
      const original = previous && current === previous.rendered ? previous.original : current;
      const rendered = language === 'ko' ? translate(original) : original;
      record.set(attribute, {original, rendered});
      if (current !== rendered) {
        if (attribute) node.setAttribute(attribute, rendered);
        else node.data = rendered;
      }
    }
    function visit(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (!node.parentElement?.closest('script,style,[data-language-name]')) apply(node, null);
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE || node.matches('script,style,[data-language-name]')) return;
      for (const attribute of attributes) apply(node, attribute);
      for (const child of node.childNodes) visit(child);
    }
    const options = {subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: attributes};
    const observer = new MutationObserver(mutations => {
      observer.disconnect();
      for (const mutation of mutations) {
        if (mutation.type === 'childList') mutation.addedNodes.forEach(visit);
        else if (mutation.type === 'attributes') apply(mutation.target, mutation.attributeName);
        else visit(mutation.target);
      }
      observer.observe(root, options);
    });
    for (const node of records.keys()) if (!node.isConnected) records.delete(node);
    document.documentElement.lang = language;
    visit(root);
    observer.observe(root, options);
    return () => observer.disconnect();
  }, [language]);

  function changeLanguage(value) {
    const next = value === 'ko' ? 'ko' : 'en';
    const url = new URL(location.href);
    if (next === 'ko') url.searchParams.set('lang', 'ko');
    else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    setLanguage(next);
  }

  return <LanguageContext.Provider value={{language, changeLanguage}}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
