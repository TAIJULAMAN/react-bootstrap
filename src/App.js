import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import Cardgroup from './Component/CardGroup/Cardgroup';
// import CardGroup from 'react-bootstrap/CardGroup';
function App() {
  return (
    <div className="App">
      <h2>this is cards</h2>
      <Cardgroup></Cardgroup>
      <Button variant="primary">hi!!!!!!!!!!!!!!!</Button>
      <br />
      <br />
      <br />
      <br />
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default App;
