import { createTsdownConfig } from '@seedcord/tsdown-config';
import { aliasFromTsconfig, createDefaultConfig } from '@seedcord/vitest-config';

// required to resolve @seedcord/fixture-base
const alias = aliasFromTsconfig(import.meta.url);

export default createDefaultConfig({
    resolve: { alias },
    test: {
        globals: true,
        environment: 'node',
        testTimeout: 10_000,
        globalSetup: './tests/utils/globalSetup.ts',
        fileParallelism: false
    },
    pack: createTsdownConfig({
        entry: ['src/index.ts', 'src/manifest-fields.ts', 'src/RuntimeBuild.ts']
    })
});
