import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";

const token = "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";
function App() {
  const[image,setImage]=useState("");
  
  async function query(data) {
    alert("please wait for some time... ");
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "d5a2d91272msh063705f414bec1fp11963djsn58fae9870b70",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        inputs:data,
      },
    };

    try {
      const response = await axios.request(options);
      setImage(response.data.url);
      // console.log(response.data.url);
      console.log(":done");
    } catch (error) {
      console.error(error);
    }
  }
  const ref=useRef(null);

  return (
    <>
      <div className="main">
      <h1 className="heading">Image Generator</h1>
      <input type="text"  ref={ref} placeholder="enter name" />
      <button onClick={()=>query(ref.current.value)}>Submit</button>
      {/* <h1>{image}</h1> */}
      {image? <img className="img" src={image} />:null}
      </div>
    </>
  );
}

export default App;
