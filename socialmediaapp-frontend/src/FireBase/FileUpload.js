import { initializeApp } from "firebase/app";
import {getStorage, getDownloadURL, ref, uploadBytes} from "firebase/storage"
import {v4} from "uuid";
import { STATUS } from "../config";


const firebaseConfig = {
  apiKey: "AIzaSyARoLQCGmYJqqNEeaGNkuRWwkd-87q9pFQ",
  authDomain: "socialmediaappuploadfile.firebaseapp.com",
  projectId: "socialmediaappuploadfile",
  storageBucket: "socialmediaappuploadfile.appspot.com",
  messagingSenderId: "700529177480",
  appId: "1:700529177480:web:57eb8d17f87c0f4548c03d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);


const userName = sessionStorage.getItem("userName");
const loggedUserId = sessionStorage.getItem("userId");

export const handleUploadingFile = async(e, fileName="")=>{
  const file = e.target.files[0];
  const response = {
    isSuccess : STATUS.IDLE,
    imageUrl : ""
  }
  
  if(file && (file?.name.includes("png") || file?.name.includes("jpeg") || file?.name.includes("jpg"))){
    const imageRef = ref(storage, fileName===""?`${userName}/${v4()}${file.name}}`:`${userName}/${fileName}`);
    // uploadBytes(imageRef, file).then((img)=>{
    //   getDownloadURL(img.ref)
    //   .then(url=>{
    //     response.isSuccess = STATUS.SUCCESS;
    //     response.imageUrl = url.toString();
    //     alert("Image Uploaded Successfully");
    //   })
    //   .catch(err=>{
    //     response.isSuccess = STATUS.ERROR;
    //     console.log("Error in creating URL.", err);
    //     alert("Error in creating URL. CHECK CONSOLE")
    //   })
    // })
    // .catch(err=>{
    //   response.isSuccess = STATUS.ERROR;
    //   console.log("Error in uploading Image", err);
    //   alert("Error in uploading Image. CHECK CONSOLE")
    // })
    try{

      const uploadFile = await uploadBytes(imageRef, file);
      try{
    const getURL = await getDownloadURL(uploadFile.ref);
        response.isSuccess = STATUS.SUCCESS;
        response.imageUrl = getURL.toString();
        alert("Image Uploaded Successfully");
      }
      catch(err){
        response.isSuccess = STATUS.ERROR;
        console.log("Error in creating URL.", err);
        alert("Error in creating URL. CHECK CONSOLE")
      }
    }
    catch(err){
      response.isSuccess = STATUS.ERROR;
      console.log("Error in uploading Image", err);
      alert("Error in uploading Image. CHECK CONSOLE")
    }

  }else{
    alert("Image Format should be jpeg, png, jpg");
  }
  return response;
}