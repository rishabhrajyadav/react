import React, { useEffect, useState } from 'react'

function Github() {
    const[data ,setData] = useState();
    useEffect(()=> {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         setData(data);
      })
    },[])

  return (
    <div className='text-center margin bg-gray-700
     text-white text-3xl'>Github followers: {data.followers}</div>
  )
}

export default Github