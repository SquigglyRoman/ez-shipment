import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { DeliveryOption, Dimensions, Provider, deliveryOptions } from './DeliveryOptions';
import { EnteredShipmentRestrictions } from './EnteredShipmentForm';

type Props = {
    enteredShipmentRestrictions: EnteredShipmentRestrictions;
}

const ShipmentOptionsTable: React.FC<Props> = (props: Props) => {
    const [sortPriceAsc, setSortPriceAsc] = useState(true);

    const unselectableStyle = {
        userSelect: 'none' as const,
    };

    function styleProviderColumn(provider: Provider): { backgroundColor: string, color: string, fontWeight: string } {
        return {
            backgroundColor: provider === 'DHL' ? '#ffcc00' : provider === 'Hermes' ? '#008ec1' : 'white',
            color: provider === 'Hermes' ? 'white' : 'black',
            fontWeight: 'bold'
        }
    }

    const optionsSortedByPrice = [...deliveryOptions].sort((a, b) => {
        return sortPriceAsc ? a.priceEur - b.priceEur : b.priceEur - a.priceEur;
    });

    function filterWeight(option: DeliveryOption): boolean {
        return parseFloatOrZero(props.enteredShipmentRestrictions.enteredWeight) <= option.maxWeightKg;
    }

    function filterDimensions(option: DeliveryOption): unknown {
        const parsedDimensions: Dimensions = {
            lengthCm: parseFloatOrZero(props.enteredShipmentRestrictions.enteredLength),
            widthCm: parseFloatOrZero(props.enteredShipmentRestrictions.enteredWidth),
            depthCm: parseFloatOrZero(props.enteredShipmentRestrictions.enteredDepth)
        };
        return option.dimensionRestrictions(parsedDimensions);
    }

    function parseFloatOrZero(maybeFloat: string): number {
        return parseFloat(maybeFloat) || 0;
    }

    return (
        <Table striped bordered hover className="mt-4">
            <thead>
                <tr>
                    <th style={unselectableStyle}>Provider</th>
                    <th onClick={() => setSortPriceAsc(!sortPriceAsc)} style={{ ...unselectableStyle, cursor: 'pointer' }}>
                        Price {sortPriceAsc ? '▲' : '▼'}
                    </th>
                    <th style={unselectableStyle}>Dimensions</th>
                    <th style={unselectableStyle}>Max weight</th>
                    <th style={unselectableStyle}>Home delivery</th>
                </tr>
            </thead>
            <tbody>
                {optionsSortedByPrice
                    .filter(option => filterDimensions(option))
                    .filter(option => filterWeight(option))
                    .map(option => (
                        <tr>
                            <td style={styleProviderColumn(option.provider)}>
                                {option.provider}
                            </td>
                            <td>{`${option.priceEur.toFixed(2)}€`}</td>
                            <td>{option.dimensionRestrictionText}</td>
                            <td>{`${option.maxWeightKg} kg`}</td>
                            <td>{option.homeDelivery ? '✔' : '❌'}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};

export default ShipmentOptionsTable;

