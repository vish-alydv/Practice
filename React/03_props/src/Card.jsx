import React from 'react'

const Card = (data) => {
  return (
    <div className='card'>
        <img src={data.img} alt='No Image'/>
        <h1>{data.name}</h1>
        <p>About Yha Likhege</p>
        <button>Call Him</button>
    </div>
  )
}

export default Card