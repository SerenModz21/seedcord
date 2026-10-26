import { createTestConfig } from '@seedcord/vitest-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
    test: createTestConfig({
        // these tests vi.mock docs' own modules, and a mock carries into the next file in a shared worker
        isolate: true,
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/test-setup.ts']
    })
});
