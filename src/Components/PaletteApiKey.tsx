import { useState, useEffect } from "react";

export default function PaletteApiKey() {
  const [apiKey, setApiKey] = useState("");
  const [projectList, setProjectList] = useState({}) as any;

  function handleChange(e: any) {
    setApiKey(e.target.value);
    if (e.target.value.length > 25) {
      getProjectList();
    }
  }

  const getProjectList = async () => {
    //   setTimeout(function(){
    //     setProjectList({proj:'Def',proj2:'Viv'});
    // }, 3000);
    const response = await fetch(
      `https://api.spectrocloud.com/v1/dashboard/projects?ApiKey=YmU5OTY4M2QxZDQxMzZlZWJjMzE1NDkwYTNhNmVkOTY=`,{mode:'no-cors'}
    );
    const jsonData = await response.json();
    setProjectList(jsonData);
    console.log(projectList);
  };

  return (
    <>
      <label htmlFor="Name">Enter Palette API Key:</label>
      <input
        type="text"
        value={apiKey}
        onChange={handleChange}
        placeholder=""
      ></input>
    </>
  );
}
