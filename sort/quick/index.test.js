import quickSort from './index.js';

describe('quickSort', () => {
    it('should return sorted array. Boundary cases.', () => {
        expect(quickSort([24])).toStrictEqual([24]);
        expect(quickSort([25, 24])).toStrictEqual([24, 25]);
    });

    it('should return sorted array', () => {
        expect(quickSort([50, 36, 24, 62, 26, 28, 30, 35, 25, 39, 60, 61, 27, 63])).toStrictEqual([
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
    
        expect(quickSort([50, 36, 24, 62, 39, 26, 28, 30, 35, 30, 25, 39, 60, 61, 27, 63])).toStrictEqual([
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

    it('should search index in sorted array with custom comparator', () => {
        const comparator = {
            checkGreat: (match, target) => match.id > target.id,
            checkEquals: (match, target) => match === target,
        };

        const array = [
            { id: 2, value: 'second' },
            { id: 1, value: 'first' },
            { id: 4, value: 'fifth' },
            { id: 3, value: 'third' },
        ];

        expect(quickSort(array, comparator)).toStrictEqual([
            { id: 1, value: 'first' },
            { id: 2, value: 'second' },
            { id: 3, value: 'third' },
            { id: 4, value: 'fifth' },
        ]);
    });
});
