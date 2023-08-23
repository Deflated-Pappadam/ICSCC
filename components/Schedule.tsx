"use client"

import {useState, useEffect} from 'react'
import Image from 'next/image'
import arrow from '@/public/down-arrow-svgrepo-com.png'

function Schedule () {
    const [dropDown, setDropDown] = useState("60px");
    
    const handleDropDown = () => {
        if(dropDown === "60px") {
            setDropDown("250px");
        }
        else {
            setDropDown("60px")
        }
    }

    return(
        <div className={`min-w-[320px] mt-5  items-center w-[40%] mx-auto overflow-hidden border-black border ease-in duration-300 rounded-lg transition-all` } 
            style={{height:
                 dropDown}}
            onClick={handleDropDown}
            onMouseLeave={() => {setDropDown("60px")}}
        > 
            <div className="flex justify-between ">
                <p className="text-lg w-[100%] p-4">Speciality of the day</p>
                <button type="button" title='button' className="p-4" onClick={handleDropDown}>
                    <Image src={arrow} alt='' width={20} height={20} style={{rotate:dropDown === "60px" ?'0deg': '180deg'}}/>
                </button>
            </div>
            <div className="pt-4 px-4">
                <p>Add contents to this location</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ullam, illum at natus necessitatibus consequatur, voluptates quae repellat earum soluta quisquam assumenda autem eos sunt, aspernatur doloremque sapiente ipsa. Quas.</p>
            </div>
        </div>
    )
}

export default Schedule;