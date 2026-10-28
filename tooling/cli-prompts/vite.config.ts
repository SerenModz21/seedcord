import { createTsdownConfig } from '@seedcord/tsdown-config';
import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    test: {
        environment: 'node',
        testTimeout: 10_000
    },
    pack: createTsdownConfig({
        entry: ['src/index.ts', 'src/testing.ts']
    })
});
