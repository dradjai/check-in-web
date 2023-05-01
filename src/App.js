import { useState } from 'react';
import CheckInHome from './compoenents/CheckInHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const [checkIn, setCheckIn] = useState();

  return (
    <>
      <CheckInHome checkIn={checkIn} setCheckIn={setCheckIn}/>
    </>
  );
}

export default App;
