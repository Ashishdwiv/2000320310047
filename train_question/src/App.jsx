import { useEffect, useState } from 'react'
import './App.css'
import TrainTable from './TrainTable';
import { Route, Routes } from 'react-router-dom';
import Train from './Train';

const data1 = {
  clientID: "f6566b3c-868e-4cdd-ae09-835171c92adb",
  clientSecret: "GLXawNpUCRNoVMTK",
  companyName: "Train Central",
  ownerEmail: "Ashish.20b0311210@abes.ac.in",
  ownerName: "Ashish",
  rollNo: "2000320310047"
}

function App() {
  const [token, setToken] = useState();
  // console.log(token);

  const fetchData = async () => {
    const fetchedData = await fetch("http://20.244.56.144/train/auth", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data1)
    });
    const data = await fetchedData.json();
    setToken(data.access_token);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Routes>
        {token && <Route path="/" element={<TrainTable token={token} />} />}
        {token && <Route path="/train/:trainNumber" element={<Train token={token} />} />}
      </Routes>

    </div>
  )
}

export default App