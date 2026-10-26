import { createTestConfig } from '@seedcord/vitest-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
    test: createTestConfig({
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/test-setup.ts']
    })
});
