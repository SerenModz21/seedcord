import { SeedcordErrorCode } from '@seedcord/errors';
import { SeedcordError } from '@seedcord/errors/internal';
import { isValid, isValidRange, satisfies } from 'verkit';

export function assertDeclaredRuntime(): void {
    const { bun, node } = process.versions;
    // tsdown-config bakes both ranges in from this package's engines
    const runtime =
        bun === undefined
            ? { name: 'Node', range: process.env.PACKAGE_NODE_RANGE ?? '', running: node }
            : { name: 'Bun', range: process.env.PACKAGE_BUN_RANGE ?? '', running: bun };

    if (
        !runtime.range ||
        !isValidRange(runtime.range) ||
        !isValid(runtime.running) ||
        satisfies(runtime.running, runtime.range, { includePrerelease: true })
    )
        return;

    throw new SeedcordError(SeedcordErrorCode.UnsupportedRuntimeVersion, [
        runtime.name,
        runtime.range,
        runtime.running
    ]);
}
