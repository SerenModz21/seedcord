import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/test-setup.ts']
    }
});
