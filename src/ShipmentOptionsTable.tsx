import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Dimensions, Provider, deliveryOptions } from './deliveryOptions';

type Props = {
    enteredShipmentRestrictions: EnteredShipmentRestrictions;
}

type EnteredShipmentRestrictions = {
    enteredLength: string;
    enteredWidth: string;
    enteredDepth: string;
}

const ShipmentOptionsTable: React.FC<Props> = (props: Props) => {
    const [sortPriceAsc, setSortPriceAsc] = useState(true);

    const unselectableStyle = {
        userSelect: 'none' as const,
    };

    function styleProviderColumn(provider: Provider): {backgroundColor: string, color: string, fontWeight: string} {
        return { 
            backgroundColor: provider === 'DHL' ? '#ffcc00' : provider === 'Hermes' ? '#008ec1' : 'white',
            color: provider === 'Hermes' ? 'white' : 'black',
            fontWeight: 'bold' 
        }
    }

    const optionsSortedByPrice = [...deliveryOptions].sort((a, b) => {
        return sortPriceAsc ? a.priceEur - b.priceEur : b.priceEur - a.priceEur;
    });

    function parseDimensions(state: EnteredShipmentRestrictions): Dimensions {
        return { lengthCm: parseFloat(state.enteredLength) || 0, widthCm: parseFloat(state.enteredWidth) || 0, depthCm: parseFloat(state.enteredDepth) || 0 };
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
                    <th style={unselectableStyle}>Note</th>
                </tr>
            </thead>
            <tbody>
                {optionsSortedByPrice
                    .filter(option => option.dimensionRestrictions(parseDimensions(props.enteredShipmentRestrictions)))
                    .map(option => (
                        <tr>
                            <td style={styleProviderColumn(option.provider)}>
                                {option.provider}
                            </td>
                            <td>{`${option.priceEur.toFixed(2)}€`}</td>
                            <td>{option.dimensionRestrictionText}</td>
                            <td>{`${option.maxWeightKg} kg`}</td>
                            <td>{option.note}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
};

export default ShipmentOptionsTable;