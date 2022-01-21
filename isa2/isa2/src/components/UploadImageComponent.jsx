import React, { useState } from "react";
import axios from 'axios';

export default function UploadImage() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };


  function Add(){
    let activeCottage =  JSON.parse(localStorage.getItem('activeCottage'));
      let image={
          type:"cottage",
          idOfType:activeCottage.id,
          image64:baseImage,
      }
    axios.post("http://localhost:8080/api/v1/images/cottage_owner",image);

  }


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="App">
      <input type="file"onChange={(e) => {uploadImage(e);}}/>
      <br/>
      <div className="center"><button className="loginbtn" onClick={()=>Add()}>Add</button></div>
      <br></br>
      <img src={baseImage} height="200px" />
      
    </div>
  );
}