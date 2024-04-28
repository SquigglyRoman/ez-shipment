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
    homeDelivery: boolean
}

export const deliveryOptions: DeliveryOption[] = [
    {
        name: 'Päckchen S',
        provider: "DHL",
        priceEur: 3.99,
        dimensionRestrictions: (dimensions) => meetsLengthWidthHeightRestrictions({ lengthCm: 35, widthCm: 25, depthCm: 10 }, dimensions),
        dimensionRestrictionText: '35x25x10 cm',
        maxWeightKg: 2,
        homeDelivery: true
    },
    {
        name: 'Päckchen M',
        provider: "DHL",
        priceEur: 4.79,
        dimensionRestrictions: (dimensions) => meetsLengthWidthHeightRestrictions({ lengthCm: 60, widthCm: 30, depthCm: 15 }, dimensions),
        dimensionRestrictionText: '60x30x15 cm',
        maxWeightKg: 2,
        homeDelivery: true
    },
    {
        name: 'Paket 2kg',
        provider: "DHL",
        priceEur: 5.49,
        dimensionRestrictions: (dimensions) => meetsLengthWidthHeightRestrictions({ lengthCm: 60, widthCm: 30, depthCm: 15 }, dimensions),
        dimensionRestrictionText: '60x30x15 cm',
        maxWeightKg: 2,
        homeDelivery: true
    },
    {
        name: 'Paket 5kg',
        provider: "DHL",
        priceEur: 6.99,
        dimensionRestrictions: (dimensions) => meetsLengthWidthHeightRestrictions({ lengthCm: 120, widthCm: 60, depthCm: 60 }, dimensions),
        dimensionRestrictionText: '120x60x60 cm',
        maxWeightKg: 5,
        homeDelivery: true
    },
    {
        name: 'Paket 10kg',
        provider: "DHL",
        priceEur: 10.49,
        dimensionRestrictions: (dimensions) => meetsLengthWidthHeightRestrictions({ lengthCm: 120, widthCm: 60, depthCm: 60 }, dimensions),
        dimensionRestrictionText: '120x60x60 cm',
        maxWeightKg: 10,
        homeDelivery: true
    },
    {
        name: 'Paket 31.5kg',
        provider: "DHL",
        priceEur: 19.99,
        dimensionRestrictions: (dimensions) => meetsLengthWidthHeightRestrictions({ lengthCm: 120, widthCm: 60, depthCm: 60 }, dimensions),
        dimensionRestrictionText: '120x60x60 cm',
        maxWeightKg: 31.5,
        homeDelivery: true
    },
    {
        name: 'Hermes Päckchen',
        provider: "Hermes",
        priceEur: 3.70,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(37, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 37cm',
        maxWeightKg: 25,
        homeDelivery: false
    },
    {
        name: 'Hermes Päckchen',
        provider: "Hermes",
        priceEur: 4.50,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(37, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 37cm',
        maxWeightKg: 25,
        homeDelivery: true
    },
    {
        name: 'S-Paket',
        provider: "Hermes",
        priceEur: 4.40,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(50, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 50cm',
        maxWeightKg: 25,
        homeDelivery: false
    },
    {
        name: 'S-Paket',
        provider: "Hermes",
        priceEur: 4.95,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(50, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 50cm',
        maxWeightKg: 25,
        homeDelivery: true
    },
    {
        name: 'M-Paket',
        provider: "Hermes",
        priceEur: 5.40,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(80, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 80cm',
        maxWeightKg: 25,
        homeDelivery: false
    },
    {
        name: 'M-Paket',
        provider: "Hermes",
        priceEur: 6.75,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(80, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 80cm',
        maxWeightKg: 25,
        homeDelivery: true
    },
    {
        name: 'L-Paket',
        provider: "Hermes",
        priceEur: 10.40,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(120, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 120cm',
        maxWeightKg: 25,
        homeDelivery: false
    },
    {
        name: 'L-Paket',
        provider: "Hermes",
        priceEur: 10.95,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(120, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 120cm',
        maxWeightKg: 25,
        homeDelivery: true
    },
    {
        name: 'XL-Paket',
        provider: "Hermes",
        priceEur: 28.95,
        dimensionRestrictions: (dimensions) => meetsLongestAndShortestSideSumRestriction(150, dimensions),
        dimensionRestrictionText: 'Longest and shortest side under 150cm',
        maxWeightKg: 31.5,
        homeDelivery: true
    }
]
