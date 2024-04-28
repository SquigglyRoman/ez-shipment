// DimensionsForm.tsx
import { Col, Form, Row } from 'react-bootstrap';
import { EnteredShipment } from './App';

export type Props = {
    state: EnteredShipment;
    setState: React.Dispatch<React.SetStateAction<EnteredShipment>>;
}

const EnteredShipmentForm = (props: Props) => {
  return (
    <Form>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Length in cm</Form.Label>
          <Form.Control
            placeholder="Length (cm)"
            value={props.state.enteredLength}
            onChange={event => props.setState({ ...props.state, enteredLength: event.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Width in cm</Form.Label>
          <Form.Control
            placeholder="Width (cm)"
            value={props.state.enteredWidth}
            onChange={event => props.setState({ ...props.state, enteredWidth: event.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Depth in cm</Form.Label>
          <Form.Control
            placeholder="Width (cm)"
            value={props.state.enteredDepth}
            onChange={event => props.setState({ ...props.state, enteredDepth: event.target.value })}
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default EnteredShipmentForm;