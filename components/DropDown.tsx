"use client"

import {useState} from 'react'
import Image from 'next/image'
import arrow from '@/public/down-arrow-svgrepo-com.png'

type dropDownProps = {
    header: string;
    date?: string;
    desc: string;
}

function DropDown (props: dropDownProps) {
    const [dropDown, setDropDown] = useState("70px");
    
    const handleDropDown = () => {
        if(dropDown === "70px") {
            setDropDown("300px");
        }
        else {
            setDropDown("70px")
        }   
    }
    
    const handleMouseLeave = () => {
        setTimeout(() => {
            setDropDown("70px")
        }, 700);
    }

    return(
        <div className={`md:min-w-[90%] min-w-[290px] mt-5 cursor-pointer items-center w-[40%] mx-auto overflow-hidden border-black border ease-in duration-300 rounded-lg transition-all` } 
            style={{height:dropDown}}
            onMouseLeave={handleMouseLeave}
        > 
            <div className="flex justify-between"
                onClick={handleDropDown}
            >
                <p className=" min-h-[90px] text-lg w-[100%] p-4 font-bold">{props.header}</p>
                <button type="button" title='button' className="p-5 my-auto" onClick={handleDropDown}>
                    <Image src={arrow} alt='' width={20} height={20} style={{rotate:dropDown === "70px" ?'0deg': '180deg'}}/>
                </button>
            </div>
            <div className="pt-4 px-4">
                <p>{props.desc}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ullam, illum at natus necessitatibus consequatur, voluptates quae repellat earum soluta quisquam assumenda autem eos sunt, aspernatur doloremque sapiente ipsa. Quas.</p> */}
            </div>
        </div>
    )
}

export default DropDown;