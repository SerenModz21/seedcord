import { createTsdownConfig } from '@seedcord/tsdown-config';
import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    test: {
        globals: true,
        environment: 'node',
        testTimeout: 10_000,
        setupFiles: ['./tests/setup.ts']
    },
    pack: createTsdownConfig({
        entry: [
            'src/index.ts',
            'src/plugin.index.ts',
            'src/internal.index.ts',
            'src/env-internal.index.ts',
            'src/hmr.index.ts',
            'src/node.index.ts',
            'src/node-internal.index.ts'
        ]
    })
});
