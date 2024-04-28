import { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dimensions, deliveryOptions } from "./deliveryOptions";

function App() {

  interface EnteredShipmentState {
    enteredLength: string;
    enteredWidth: string;
    enteredDepth: string;
  }

  const [state, setState] = useState<EnteredShipmentState>({
    enteredLength: '',
    enteredWidth: '',
    enteredDepth: ''
  });

  function parseDimensions(state: EnteredShipmentState): Dimensions {
    return { lengthCm: parseFloat(state.enteredLength) || 0, widthCm: parseFloat(state.enteredWidth) || 0, depthCm: parseFloat(state.enteredDepth) || 0 };
  }

  return (
    <div className="p-4">
      <Form>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Length in cm</Form.Label>
            <Form.Control
              className="border border-primary"
              placeholder="Length (cm)"
              value={state.enteredLength}
              onChange={event => setState({ ...state, enteredLength: event.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Width in cm</Form.Label>
            <Form.Control
              placeholder="Width (cm)"
              value={state.enteredWidth}
              onChange={event => setState({ ...state, enteredWidth: event.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Depth in cm</Form.Label>
            <Form.Control
              placeholder="Width (cm)"
              value={state.enteredDepth}
              onChange={event => setState({ ...state, enteredDepth: event.target.value })}
            />
          </Form.Group>
        </Row>
      </Form >

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Price €</th>
            <th>Dimensions</th>
            <th>Max weight</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {deliveryOptions
            .filter(option => option.dimensionRestrictions(parseDimensions(state)))
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
    </div>
  );
}

export default App;

