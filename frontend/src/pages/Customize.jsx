import React, { useContext, useRef, useState } from 'react'
import { LuImagePlus } from "react-icons/lu";
import Card from '../components/Card'
import image1 from "../assets/authBg.png"
import image2 from "../assets/image1.png"
import image3 from "../assets/image2.jpg"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import image8 from "../assets/Venom2.jpeg"
import image9 from "../assets/venom1.jpeg"
import image10 from "../assets/venom_background.jpeg"
import image11 from "../assets/venomAuth.jpeg"
// import image12 from "../assets/venomAuthBg.jpeg"
import image13 from "../assets/VenomAuthBgImg.jpg"
import { userDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';



const Customize = () => {

  const {serverUrl,userData,setUserData,frontendImage,setFrontendImage,
        backendImage,setBackendImage,selectedImage,setSelectedImage}=useContext(userDataContext);

  const navigate=useNavigate()


 const inputImage=useRef()
 const handleImage=(e)=>{
   const file=e.target.files[0]
   setBackendImage(file)
   setFrontendImage(URL.createObjectURL(file))
 }


  return (
    <div  className='w-full h-[100vh] bg-gradient-to-t 
    from-[black] to-[#030353] flex justify-center 
    items-center flex-col p-[20px] gap-[20px] ' >

       <IoMdArrowRoundBack className="absolute top-[30px] left-[30px] cursor-pointer text-white w-[25px] h-[25px]" onClick={()=>navigate('/')}/>

      <h1 className='text-white mb-[10px] text-[30px] text-center '>Select your <span className='text-blue-200'>Assistant Image</span></h1>

     <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>

      <Card image={image1}/>
      {/* <Card image={image2}/> */}
      <Card image={image3}/>
      <Card image={image4}/>
      {/* <Card image={image5}/> */}
      {/* <Card image={image6}/>
      <Card image={image7}/>
      <Card image={image9}/> */}
      <Card image={image8}/>
      <Card image={image10}/>
      <Card image={image11}/>
      {/* <Card image={image12}/> */}
      <Card image={image13}/>

       <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2
        border-[#0000ff66] rounded-2xl overflow-hidden
       hover:shadow-2xl hover:shadow-blue-950 cursor-pointer 
       hover:border-4 hover:border-white flex items-center justify-center ${selectedImage=="input" ? "border-4 border-white shadow-2xl shadow-blue-950":null}`}
       onClick={()=>{inputImage.current.click()
        setSelectedImage("input")
       }}>

        {!frontendImage && <LuImagePlus  className='text-white w-[25px] h-[25px]'/>}
        {frontendImage && <img src={frontendImage} className='h-full object-cover'/>}
      
     </div>    

     <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage} />
 

     </div>

     {selectedImage && <button className="min-w-[130px] h-[60px] bg-white rounded-full
      text-black font-semibold text-[19px] cursor-pointer"onClick={()=>navigate("/customize2")}>Next</button> }

    </div>
  )
}

export default Customize
