import { createTsdownConfig } from '@seedcord/tsdown-config';
import { aliasFromTsconfig, createDefaultConfig } from '@seedcord/vitest-config';

// required to resolve jsxImportSource to discord-component-embed/* (eg. discord-component-embed/jsx-dev-runtime)
const alias = aliasFromTsconfig(import.meta.url);

export default createDefaultConfig({
    resolve: { alias },
    pack: [
        createTsdownConfig({
            entry: ['src/index.ts', 'src/react.index.ts', 'src/jsx-runtime.ts', 'src/jsx-dev-runtime.ts'],
            platform: 'neutral',
            shims: false,
            deps: { dts: { alwaysBundle: [/^discord-api-types\//] } }
        }),
        createTsdownConfig({
            entry: ['src/cli.ts'],
            dts: false,
            shims: false,
            clean: false
        })
    ]
});
