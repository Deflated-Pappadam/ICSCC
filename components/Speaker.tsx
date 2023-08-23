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
    <div className='flex flex-col md:w-[400px] w-[250px] h-full md:m-6'>
    
      <Image src={props.image} alt={props.name} className=' transition-all ' placeholder="blur"/> 
      
   
    
      <div className='flex flex-col md:p-5 p-1 mb-3'>
        <div className='md:text-3xl text-2xl text-center pt-4'>{props.name}</div>
        <a href={props.url} className='md:text-xl text-lg font-light text-center pt-4'>Profile</a>
        <div className='md:text-2xl text-lg text-ellipsis pt-3 mx-3'>{props.desc}</div>
      </div>
    </div>
  )
}

  export default Speaker