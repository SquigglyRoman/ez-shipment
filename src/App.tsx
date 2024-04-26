import { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { deliveryOptions } from "./deliveryOptions";

function App() {

  const [state, setState] = useState({
    enteredLengthCm: '',
    enteredWidthCm: ''
  });

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div className="p-4">
      <Form>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Length in cm</Form.Label>
            <Form.Control
              className="border border-primary"
              placeholder="Length (cm)"
              value={state.enteredLengthCm}
              onChange={event => setState({ ...state, enteredLengthCm: event.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Width in cm</Form.Label>
            <Form.Control
              placeholder="Width (cm)"
              value={state.enteredWidthCm}
              onChange={event => setState({ ...state, enteredWidthCm: event.target.value })}
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
          {deliveryOptions.map(option => (
            <tr>
              <td>{option.provider}</td>
              <td>{`${option.priceEur}€`}</td>
              <td>{option.dimensionRestrictionText}</td>
              <td>{`${option.maxWeightKg}kg`}</td>
              <td>{option.note}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
