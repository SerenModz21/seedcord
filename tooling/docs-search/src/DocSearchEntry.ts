export interface DocSearchEntry {
    slug: string;
    name: string;
    qualifiedName: string;
    packageName: string;
    packageVersion?: string;
    kind: number;
    summary: string | null;
    aliases?: string[];
    file?: string;
    value?: string;
    /** The runtime condition of this entry's class, like `workerd`. */
    condition?: string;
    tokens: string[];
}
