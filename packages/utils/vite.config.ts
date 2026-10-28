import { createTsdownConfig } from '@seedcord/tsdown-config';
import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    test: {
        setupFiles: ['./tests/setup.ts']
    },
    pack: createTsdownConfig({
        entry: ['src/index.ts', 'src/internal.index.ts']
    })
});
