import { createTsdownConfig } from '@seedcord/tsdown-config';
import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/test-setup.ts']
    },
    pack: createTsdownConfig({
        entry: ['src/**/*.{ts,tsx}'],
        format: ['esm'],
        platform: 'neutral',
        shims: false,
        target: 'esnext',
        dts: true,
        unbundle: true
    })
});
