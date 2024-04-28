import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import EnteredShipmentForm from './EnteredShipmentForm';
import ShipmentOptionsTable from "./ShipmentOptionsTable";

export type EnteredShipment = {
  enteredLength: string;
  enteredWidth: string;
  enteredDepth: string;
}

function App() {

  const [state, setState] = useState<EnteredShipment>({
    enteredLength: '',
    enteredWidth: '',
    enteredDepth: ''
  });

  return (
    <div className="p-4">
      <EnteredShipmentForm state={state} setState={setState} />
      <ShipmentOptionsTable enteredShipmentRestrictions={state} />
    </div>
  );
}

export default App;

