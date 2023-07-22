import { useEffect, useState } from 'react'
import './App.css'

const body1 = {
  companyName: "Train Central",
  ownerName: "Ashish",
  rollNo: "047",
  ownerEmail: "Ashish.20b0311210@abes.ac.in",
  accessCode: "qxrwbC"
}

function App() {
  const [count, setCount] = useState(0)

  const fetchData = async () => {
    const fetchedData = await fetch("http://20.244.56.144/train/register", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },

      body: JSON.stringify(body1)
    });
    const data = await fetchedData.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">

    </div>
  )
}

export default App