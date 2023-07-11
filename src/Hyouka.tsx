import { useState, useEffect } from "react";
import "./Hyouka.css";

const gitHubUrl = "https://api.github.com/users/deekshasharma";

export default function Hyouka() {
    const [userData, setUserData] = useState({}) as any;
    
    useEffect(() => {
        getGitHubUserWithFetch();
      }, []);
    
      const getGitHubUserWithFetch = async () => {
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
      };
    
    return (
        <div className="App">
          <header className="App-header">
            <h2>GitHub User Data</h2>
          </header>
          <div className="user-container">
            <h5 className="info-item">{userData.name}</h5>
            <h5 className="info-item">{userData.location}</h5>
            <h5 className="info-item">{userData.blog}</h5>
            <h5 className="info-item">{userData.company}</h5>
          </div>
        </div>
      );
}