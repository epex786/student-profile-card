import React, { useState } from "react";
import { use } from "react";

const App = () => {

  const [userName, setUserName] = useState('')
  const [DOB, setDOB] = useState('')
  const [enrollment, setEnrollment] = useState('')
  const [branch, setBranch] = useState('')
  const [image, setImage] = useState('')

  const [allusers, setAllusers] = useState([])
  

  const submitHandler = (e) => {
    e.preventDefault();

    const newArr = [...allusers, {userName, DOB, enrollment, branch, image}]
    setAllusers(newArr)


    setUserName('')
    setDOB('')
    setEnrollment('')
    setBranch('')
    setImage('')
  };

  const deleteHandler = (i)=>{
    const copyarr = [...allusers];
    copyarr.splice(i,1)
    setAllusers(copyarr)
  }

  return (
    <div className="pl-6 pr-6">
      <div className="text-center">
        <img className="h-[290px] w-[100%] object-cover object-bottom"
         src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/subscribe-to-us-img.png" alt="" />
        <h1 className=" text-3xl font-bold m-10">STUDENT INFO PORTAL</h1>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label for = "name" className="block">Name</label>
          <input
          id="name"
          className="w-[30%] h-[46px] border-2 border-black px-4 py-2 rounded mr-10 mb-10" 
          type="text" placeholder="Enter Your Name" value={userName} 
          onChange={(e)=>{
            setUserName(e.target.value);
          }}
          />
          <label for = "dob" className="block">Date of Birth</label>
        
          
          <input
          id="dob"
          className="border-2 border-black px-4 py-2 rounded mb-10 " 
          type="date" value={DOB} 
          onChange={(e)=>{
            setDOB(e.target.value);
          }}
          />
          <label for = "enrol" className="block">Enrollment</label>
          <br />
          <input
          id="enrol"
          className="w-[30%] h-[46px] border-2 border-black px-4 py-2 rounded mr-10 mb-10" 
          type="text" placeholder="Enter Enrollment Number" value={enrollment} 
          onChange={(e)=>{
            setEnrollment(e.target.value);
          }}
          />
        
        <label for="branch">Branch</label>
        
          <select className="w-[15%] h-[46px] border-2 border-black px-4 py-2 rounded mr-10 mb-10" 
          type="text" placeholder="Enter Your Branch" value={branch}
          onChange={(e)=>{
            setBranch(e.target.value);
          }}>
            <option>Select Branch</option>
            <option value={'CSE'}>CSE</option>
            <option value={'AIML'}>AIML</option>
            <option value={'AIDS'}>AIDS</option>
            <option value={'AI'}>AI</option>
            <option value={'IT'}>IT</option>
            <option value={'EC'}>EC</option>
            <option value={'EX'}>EX</option>
            <option value={'ME'}>ME</option>
            <option value={'CE'}>CE</option>
          </select>

          <br />
          <label for="image">Upload Image</label>
          <br />
          <input
           className="w-[30%] h-[46px] border-2 border-black px-4 py-2 rounded mr-10 mb-10" 
          type="text" value={image} 
          onChange={(e)=>{
            setImage(e.target.value);
          }}
          />
          
          <button className="text-white bg-zinc-600 px-4 py-2 rounded ml-4">Submit</button>
        </form>
      </div>

      <div className="bg-pink-400 p-5">
        {allusers.map(function(elem,i){

          return <div className=" bg-green-400 w-fit px-8 py-5 rounded inline-block m-3">
            <img src={elem.image} alt="User Image" className=" rounded-full h-[150px] w-[150px] object-cover object-center "/>
            <h2>{elem.userName}</h2>
            <p>DOB: {elem.DOB}</p>
            <p>Enrollment: {elem.enrollment}</p>
            <p>Branch: {elem.branch}</p>
            
            <button onClick={(i)=>{
              deleteHandler(i)
            }} 
            className=" bg-yellow-500 px-2 py-1 mt-3 ml-32 rounded-full"><i class="ri-delete-bin-6-line"></i></button>
          </div>
        })}
      </div>

    </div>
  );
};

export default App;
