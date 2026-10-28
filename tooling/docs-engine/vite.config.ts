import { createTsdownConfig } from '@seedcord/tsdown-config';
import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    test: {
        globals: true,
        environment: 'node',
        testTimeout: 15_000,
        globalSetup: './tests/utils/globalSetup.ts'
    },
    pack: createTsdownConfig({
        entry: ['src/index.ts', 'src/client.ts', 'src/workspace.ts']
    })
});
