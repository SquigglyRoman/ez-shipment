import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Dimensions, deliveryOptions } from './deliveryOptions';

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
                    <th>Provider</th>
                    <th onClick={() => setSortPriceAsc(!sortPriceAsc)} style={{ cursor: 'pointer' }}>
                        Price {sortPriceAsc ? '▲' : '▼'}
                    </th>
                    <th>Dimensions</th>
                    <th>Max weight</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {optionsSortedByPrice
                    .filter(option => option.dimensionRestrictions(parseDimensions(props.enteredShipmentRestrictions)))
                    .map(option => (
                        <tr>
                            <td>{option.provider}</td>
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