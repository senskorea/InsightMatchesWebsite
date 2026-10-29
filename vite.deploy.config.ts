import { defineConfig } from 'vite';
import { existsSync } from 'node:fs';
import base from './vite.config';

// A configured optional landing page may arrive before its source is committed.
// Keep the normal config intact; publish all available entries and fail if a core
// entry is missing. New pages are included automatically once their files exist.
export default defineConfig(async env => {
  const config = typeof base === 'function' ? await base(env) : await base;
  const input = config.build?.rollupOptions?.input;
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    throw new Error('Expected named website build entries');
  }
  for (const key of ['main', 'deck']) {
    if (!input[key] || !existsSync(input[key])) throw new Error(`Missing core build entry: ${key}`);
  }
  const available = Object.fromEntries(Object.entries(input).filter(([name, filename]) => {
    if (existsSync(filename)) return true;
    console.warn(`Skipping unpublished optional entry: ${name} (${filename})`);
    return false;
  }));
  return { ...config, build: { ...config.build, rollupOptions: { ...config.build?.rollupOptions, input: available } } };
});
