import { Dimensions } from "./DeliveryOptions";

export function meetsLengthWidthHeightRestrictions(restriction: Dimensions, entered: Dimensions): boolean {
    const sortedRestriction = Object.values(restriction).sort((a, b) => a - b);
    const sortedEntered = Object.values(entered).sort((a, b) => a - b);

    return sortedEntered.every((value, index) => value <= sortedRestriction[index]);
}

export function meetsLongestAndShortestSideSumRestriction(maxLongestPlusShortestCm: number, entered: Dimensions): boolean {
    const dimensionsArray: number[] = Object.values(entered);
    const maxDimension = Math.max(...dimensionsArray);
    const minDimension = Math.min(...dimensionsArray);
    return maxDimension + minDimension <= maxLongestPlusShortestCm;
}