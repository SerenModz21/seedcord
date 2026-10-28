import { createTsdownConfig } from '@seedcord/tsdown-config';

import { createDefaultConfig } from './src';

export default createDefaultConfig({
    pack: createTsdownConfig({
        entry: ['src/index.ts', 'src/freshModules.ts'],
        clean: true
    })
});
