// DimensionsForm.tsx
import { Col, Form, Row } from 'react-bootstrap';

export type Props = {
    state: EnteredShipmentRestrictions;
    setState: React.Dispatch<React.SetStateAction<EnteredShipmentRestrictions>>;
}

export type EnteredShipmentRestrictions = {
  enteredLength: string;
  enteredWidth: string;
  enteredDepth: string;
  enteredWeight: string;
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
        <Form.Group as={Col}>
          <Form.Label>Weight in kg</Form.Label>
          <Form.Control
            placeholder="Weight (kg)"
            value={props.state.enteredWeight}
            onChange={event => props.setState({ ...props.state, enteredWeight: event.target.value })}
          />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default EnteredShipmentForm;