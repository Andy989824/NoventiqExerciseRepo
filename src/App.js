import "./App.css";

//health check API
import axios from "axios";
import React, { useEffect, useState } from "react";

//Firebase
import { db } from "./config";
import { ref, update, onValue } from "firebase/database";

//Firebase
const getData = ref(db, "/food");

onValue(getData, (item) => {
  const data = item.val();
  console.log(data);
});

const logg = proccess.env.DBURL;
console.log(logg);
console.log(process.env.DBURL);

//health check API
export default function App() {
  const [healthStatus, setHealthStatus] = useState(null);
  useEffect(() => {
    const fetchHealthStatus = async () => {
      try {
        const response = await axios.get("#backendAPI#");
        setHealthStatus(response.data);
      } catch (error) {
        console.log("Failed to fetch health status:", error);
      }
    };

    fetchHealthStatus();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World -05</h1>

        {healthStatus ? (
          <p>
            Health Status: {healthStatus.status}
            <br />
            Message: {healthStatus.message}
          </p>
        ) : (
          <p>
            Health Status: ERR_CONNECTION_REFUSED
            <br />
            Message: Server might not be running
          </p>
        )}
      </header>
    </div>
  );
}
