import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your repo name if deploying to https://username.github.io/repo-name
const repoName = '/amrit-aahar-wellness-web/';

export default defineConfig({
  plugins: [react()],
  base: repoName,
});
