import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

function App() {
  const Navigate = useNavigate();
  return (
    <div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
      <h1>Home Page</h1>
      <Button variant="outline-dark" style={{width:"100%"}} onClick={() => Navigate("create")}>NEXT</Button>
    </div>
  );
}

export default App;
