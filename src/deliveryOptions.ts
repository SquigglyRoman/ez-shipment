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
        dimensionRestrictions: (dimensions) => dimensions.lengthCm <= 35 && dimensions.widthCm <= 25 && dimensions.depthCm <= 10,
        dimensionRestrictionText: '35x25x10 cm (LxWxD)',
        maxWeightKg: 2,
        note: ''
    },
    {
        name: 'Hermes Päckchen',
        provider: "Hermes",
        priceEur: 4.50,
        dimensionRestrictions: (dimensions) => {
            const dimensionsArray: number[] = [dimensions.lengthCm, dimensions.widthCm, dimensions.depthCm]
            const maxDimension = Math.max(...dimensionsArray); 
            const minDimension = Math.min(...dimensionsArray);
            return maxDimension + minDimension <= 37;
        },
        dimensionRestrictionText: 'Longest and shortest side under 37cm',
        maxWeightKg: 2,
        note: 'Home delivery'
    }
]