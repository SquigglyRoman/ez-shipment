import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ShipmentOptionsTable from "./ShipmentOptionsTable";

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

      <ShipmentOptionsTable enteredShipmentRestrictions={state} />
    </div>
  );
}

export default App;

