import React, { useState } from "react";
import axios from 'axios';

export default function UploadImage() {
  const [baseImage1, setBaseImage1] = useState("");
  const [baseImage2, setBaseImage2] = useState("");
  const [baseImage3, setBaseImage3] = useState("");
  const [baseImage4, setBaseImage4] = useState("");
  const [baseImage5, setBaseImage5] = useState("");

 

  return (
    <div className="App">
      
      
      <br></br>
      <img src={axios.get("http://localhost:8080/api/v1/images/type/cottage_owner/cottage/2").then(response =>{setBaseImage1(response.data.image1)}),baseImage1} height="200px" />
      <br></br>
      <img src={axios.get("http://localhost:8080/api/v1/images/type/cottage_owner/cottage/2").then(response =>{setBaseImage2(response.data.image2)}),baseImage2} height="200px" />
      <br></br>
      <img src={axios.get("http://localhost:8080/api/v1/images/type/cottage_owner/cottage/2").then(response =>{setBaseImage3(response.data.image3)}),baseImage3} height="200px" />
      <br></br>
      <img src={axios.get("http://localhost:8080/api/v1/images/type/cottage_owner/cottage/2").then(response =>{setBaseImage4(response.data.image4)}),baseImage4} height="200px" />
      <br></br>
      <img src={axios.get("http://localhost:8080/api/v1/images/type/cottage_owner/cottage/2").then(response =>{setBaseImage5(response.data.image5)}),baseImage5} height="200px" />
      
    </div>
  );
}