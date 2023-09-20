import React, { useState } from 'react'
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { gethistory } from '../atoms/gethistory';

function input_box() {
  const [input,setinput] = useState("");
  const [ans,setans] = useState("");
  const setHistory = useSetRecoilState(gethistory);
  const handlesubmit = async() =>{
    const response = await axios.post("http://localhost:3001/post",{
      "data": input
    })
    let data = response.data;
    setans(data);
    const get = await axios.post("http://localhost:3001/history",{})
    setHistory(get.data);
  }


  return (
    <section className='h-screen w-screen bg-blue flex justify-center items-center'>
      <div className='w-96 h-44 bg-lapis rounded-xl shadow-2xl flex flex-col  justify-center items-center'>
        <div className='flex justify-center items-center mb-2'>
          <input className='w-30 border-blue-400 border-2 rounded-2xl mr-2 p-1' onChange={ (e) =>{setinput(e.target.value);}} placeholder='Equation Input' ></input>
          <button className='mx-2 bg-green rounded-3xl p-2' onClick={handlesubmit}>Compute</button>
        </div>
        <div className='w-24 h-20 text-center text-3xl'>{ans}</div>
      </div>
    </section>
  )
}

export default input_box