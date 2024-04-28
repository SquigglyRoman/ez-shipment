import { Dimensions } from "./DeliveryOptions";
import { meetsLengthWidthHeightRestrictions, meetsLongestAndShortestSideSumRestriction } from "./DimensionRestrictionTemplates";

describe("LengthWidthHeightRestriction Template", () => {
    
    test.each([
        [{ lengthCm: 35, widthCm: 25, depthCm: 10 }, true],
        [{ lengthCm: 25, widthCm: 35, depthCm: 10 }, true],
        [{ lengthCm: 25, widthCm: 10, depthCm: 35 }, true],
        [{ lengthCm: 25, widthCm: 10, depthCm: 36 }, false],
        [{ lengthCm: 25, widthCm: 11, depthCm: 36 }, false],
        [{ lengthCm: 26, widthCm: 11, depthCm: 36 }, false],
    ])(`Given a restriction of 35x25x10 and entered dimensions of %p, the result of the check is %s.`, (entered, expected) => {
        const restriction: Dimensions = { lengthCm: 35, widthCm: 25, depthCm: 10 };
        
        expect(meetsLengthWidthHeightRestrictions(restriction, entered)).toBe(expected);
    });
});

describe("LongestAndShortestSideSumRestriction Template", () => {
    test.each([
        [{ lengthCm: 25, widthCm: 10, depthCm: 5 }, true],
        [{ lengthCm: 25, widthCm: 10, depthCm: 10 }, true],
        [{ lengthCm: 10, widthCm: 25, depthCm: 10 }, true],
        [{ lengthCm: 26, widthCm: 10, depthCm: 10 }, false],
        [{ lengthCm: 25.1, widthCm: 10, depthCm: 10 }, false],
    ])(`Given a restriction of longest plus shortest side < 35 and entered dimensions of %p, the result of the check is %s.`, (entered, expected) => {
        expect(meetsLongestAndShortestSideSumRestriction(35, entered)).toBe(expected);
    });
});
