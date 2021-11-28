import selectionSort from './index.js';

describe('selectionSort', () => {
    it('should return sorted array. Boundary cases.', () => {
        expect(selectionSort([24])).toStrictEqual([24]);
        expect(selectionSort([25, 24])).toStrictEqual([24, 25]);
    });

    it('should return sorted array', () => {
        expect(selectionSort([50, 36, 24, 62, 26, 28, 30, 35, 25, 39, 60, 61, 27, 63])).toStrictEqual([
            24,
            25,
            26,
            27,
            28,
            30,
            35,
            36,
            39,
            50,
            60,
            61,
            62,
            63,
        ]);

        expect(selectionSort([50, 36, 24, 62, 39, 26, 28, 30, 35, 30, 25, 39, 60, 61, 27, 63])).toStrictEqual([
            24,
            25,
            26,
            27,
            28,
            30,
            30,
            35,
            36,
            39,
            39,
            50,
            60,
            61,
            62,
            63,
        ]);
    });
});
