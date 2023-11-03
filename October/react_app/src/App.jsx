import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import avatar from './assets/earth.png'
import axios from 'axios';

const url='http://localhost:3000/uploads'
function App() {

  const [postImage, setPostImage] = useState({myFile:""})

  const createPost=async(newImage)=>{
    try {
      await axios.post(url,newImage);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    createPost(postImage);
    console.log("uploaded")
  }

  const handleFileUpload = async (e)=>{
    const file=e.target.files[0];
    console.log(file);
    // const base16=await imageToBase16(file);
    // console.log(base16);
    // const base64=await convertToBase64(file);
    // const base16=await base64ToBase16Image(base64);
    // console.log(base64);
    // console.log(base16.length);
    setPostImage({...postImage,myFile:file});
  }

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src={postImage.myFile || avatar} alt="" />
        </label>

          <input 
          type="file"
          label="Image"
          name="myFile"
          id="file-upload"
          accept=".jpeg,.png,.jpg"
          onChange={(e=>handleFileUpload(e))}
          />

          <h3>Hey Hello</h3>
          <span>Designer</span>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;


// function convertToBase64(file){
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () =>{
//       resolve(fileReader.result)
//     };
//     fileReader.onerror = (error) =>{
//       reject(error)
//     }
//   });
// }

// async function base64ToBase16Image(base64) {
//   const base64Data = await base64.replace(/^data:image\/\w+;base64,/, '');
//   const binaryData = atob(base64Data);
//   const arrayBuffer = new ArrayBuffer(binaryData.length);
//   const uint8Array = new Uint8Array(arrayBuffer);

//   for (let i = 0; i < binaryData.length; i++) {
//     uint8Array[i] = binaryData.charCodeAt(i);
//   }

//   let base16String = '';

//   for (let i = 0; i < uint8Array.length; i++) {
//     const hex = uint8Array[i].toString(16).toUpperCase().padStart(2, '0');
//     base16String += hex;
//   }

//   return base16String;
// }


// async function imageToBase16(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
    
//     fileReader.onload = () => {
//       const arrayBuffer = fileReader.result;
//       const uint8Array = new Uint8Array(arrayBuffer);
//       let base16String = '';

//       for (let i = 0; i < uint8Array.length; i++) {
//         const hex = uint8Array[i].toString(16).toUpperCase().padStart(2, '0');
//         base16String += hex;
//       }

//       resolve(base16String);
//     };

//     fileReader.onerror = (error) => {
//       reject(error);
//     };

//     fileReader.readAsArrayBuffer(file);
//   });
// }
