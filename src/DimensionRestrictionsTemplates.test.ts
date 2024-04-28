import { Dimensions } from "./DeliveryOptions";
import { meetsLengthWidthHeightRestrictions } from "./DimensionRestrictionTemplates";

describe("LengthWidthHeightRestrictionTemplate", () => {
    const restriction: Dimensions = { lengthCm: 35, widthCm: 25, depthCm: 10 };

    test.each([
        [{ lengthCm: 35, widthCm: 25, depthCm: 10 }, true],
        [{ lengthCm: 25, widthCm: 35, depthCm: 10 }, true],
        [{ lengthCm: 25, widthCm: 10, depthCm: 35 }, true],
        [{ lengthCm: 25, widthCm: 10, depthCm: 36 }, false],
        [{ lengthCm: 25, widthCm: 11, depthCm: 36 }, false],
        [{ lengthCm: 26, widthCm: 11, depthCm: 36 }, false],
    ])(`Given a restriction of 35x25x10 and entered dimensions of %p, the result of the check is %s.`, (entered, expected) => {
        expect(meetsLengthWidthHeightRestrictions(restriction, entered)).toBe(expected);
    });
});
