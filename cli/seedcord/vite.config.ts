import { createTsdownConfig } from '@seedcord/tsdown-config';
import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    test: {
        globals: true,
        environment: 'node'
    },
    pack: createTsdownConfig({
        entry: ['src/index.ts', 'src/workerd.index.ts', 'src/cli.ts'],
        format: ['esm'],
        deps: { neverBundle: true, alwaysBundle: ['@seedcord/cli-prompts'] }
    })
});
