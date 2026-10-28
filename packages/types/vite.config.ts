import { createTsdownConfig } from '@seedcord/tsdown-config';
import { createDefaultConfig } from '@seedcord/vitest-config';

export default createDefaultConfig({
    pack: createTsdownConfig({
        entry: ['src/index.ts', 'src/internal.index.ts']
    })
});
