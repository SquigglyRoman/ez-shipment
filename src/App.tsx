import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import EnteredShipmentForm, { EnteredShipmentRestrictions } from './EnteredShipmentForm';
import ShipmentOptionsTable from "./ShipmentOptionsTable";

function App() {

  const [state, setState] = useState<EnteredShipmentRestrictions>({
    enteredLength: '',
    enteredWidth: '',
    enteredDepth: '',
    enteredWeight: ''
  });

  return (
    <div className="p-4">
      <EnteredShipmentForm state={state} setState={setState} />
      <ShipmentOptionsTable enteredShipmentRestrictions={state} />
    </div>
  );
}

export default App;

