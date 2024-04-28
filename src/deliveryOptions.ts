import { meetsLengthWidthHeightRestrictions, meetsLongestAndShortestSideSumRestriction } from "./DimensionRestrictionTemplates"

export type Provider = "DHL" | "Hermes"

export type Dimensions = {
    lengthCm: number
    widthCm: number
    depthCm: number
}

export type DeliveryOption = {
    name: string
    provider: Provider
    priceEur: number
    dimensionRestrictions: (dimensions: Dimensions) => boolean
    dimensionRestrictionText: string
    maxWeightKg: number,
    note: string
}

export const deliveryOptions: DeliveryOption[] = [
    {
        name: 'Päckchen S',
        provider: "DHL",
        priceEur: 3.99,
        dimensionRestrictions: (dimensions) => meetsLengthWidthHeightRestrictions({ lengthCm: 35, widthCm: 25, depthCm: 10 }, dimensions),
        dimensionRestrictionText: '35x25x10 cm',
        maxWeightKg: 2,
        note: ''
    },
    {
        name: 'Hermes Päckchen',
        provider: "Hermes",
        priceEur: 4.50,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(37, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 37cm',
        maxWeightKg: 2,
        note: 'Home delivery'
    }
]