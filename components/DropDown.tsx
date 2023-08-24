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
            setDropDown("100%");
        }
        else {
            setDropDown("70px")
        }   
    }
    
    const handleMouseLeave = () => {
        setTimeout(() => {
            setDropDown("70px")
        }, 400);
    }

    return(
        <div className={`md:min-w-[90%] min-h-[70px] min-w-[290px] mt-5 cursor-pointer items-center w-[40%] mx-auto overflow-hidden border-black border ease-in duration-300 rounded-lg transition-all pb-7` } 
            style={{height:dropDown}}
            onMouseLeave={handleMouseLeave}
        > 
            <div className="flex justify-between items-center h-[70px]"
                onClick={handleDropDown}
            >
                <p className="text-lg w-[100%] p-4 font-bold">{props.header}</p>
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