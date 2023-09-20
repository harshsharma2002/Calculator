import React, { useState } from 'react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { gethistory } from '../atoms/gethistory';

function off_screen() {
  const [toggle,settoggle] = useState(true);
  const [data,setdata] = useRecoilState(gethistory);
  const handleclick = async() => {
    settoggle(!toggle);
    const response = await axios.post("http://localhost:3001/history",{});
    setdata(response.data);
  }

  const handleclear = async() =>{
    await axios.post("http://localhost:3001/clear",{})
    setdata([]);
  }
  return (
    <section>
        <button className='fixed right-0 top-0 bg-green p-2 m-2 rounded' onClick={handleclick}>History</button>
        <main className={!toggle ? 'fixed top-5 left-5 w-full h-full bg-[#FFFFFF] md:w-[30%] md:h-[95%] md:border-2 md:border-slate-400 transition-all ease-in-out delay-300': 'fixed left-[-100%] w-20 transition-all ease-out'}>
          <div className='w-full h-[90%] overflow-y-scroll p-2'>
              {
                data.map( d => {
                  return(
                  <div key={Math.random()} className='my-3'>
                    <p>Equation: {d.equation}</p>
                    <p>Result: {d.ans}</p>
                  </div>
                  )
                })
              }
          </div>
          <div className='static'>
            <button className='absolute bottom-2 left-2 bg-green p-2 m-2 rounded' onClick={handleclear}>Clear History</button>
            {/* <button className='absolute bottom-2 right-2 bg-green p-2 m-2 rounded'>Close</button> */}
          </div>
        </main>
    </section>
  )
}

export default off_screen