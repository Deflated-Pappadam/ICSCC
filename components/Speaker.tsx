import Image, { StaticImageData } from 'next/image'
import React from 'react'

type speakerProps = {
  image: StaticImageData;
  name:string;
  desc:string;
  url:string;
};


function Speaker(props: speakerProps) {
  return (
    <div className='flex flex-col w-[400px] h-full m-6'>
    
      <Image src={props.image} alt={props.name} className=' transition-all ' /> 
      
   
    
      <div className='flex flex-col p-5 mb-3'>
        <div className='text-3xl text-center pt-4'>{props.name}</div>
        <a href={props.url} className='text-xl text-center pt-4'>Profile</a>
        <div className='text-2xl text-ellipsis pt-3 mx-3'>{props.desc}</div>
      </div>
    </div>
  )
}

  export default Speaker