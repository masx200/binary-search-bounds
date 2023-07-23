//declare module 'binary-search-bounds' {
interface BSearch {
    gt<A, B>(
        array: A[],
        y: B,
        compare?: (a: A, b: B) => number | null | undefined,
        lo?: number,
        hi?: number
    ): number;
    ge<A, B>(
        array: A[],
        y: B,
        compare?: (a: A, b: B) => number | null | undefined,
        lo?: number,
        hi?: number
    ): number;
    lt<A, B>(
        array: A[],
        y: B,
        compare?: (a: A, b: B) => number | null | undefined,
        lo?: number,
        hi?: number
    ): number;
    le<A, B>(
        array: A[],
        y: B,
        compare?: (a: A, b: B) => number | null | undefined,
        lo?: number,
        hi?: number
    ): number;
    eq<A, B>(
        array: A[],
        y: B,
        compare?: (a: A, b: B) => number | null | undefined,
        lo?: number,
        hi?: number
    ): number;
}
declare const bsearch: BSearch;
export = bsearch;
//}
