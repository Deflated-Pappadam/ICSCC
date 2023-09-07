import NaviBar from '@/components/NaviBar';
import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import landingBanner from '@/public/about-banner-2.jpg'

function page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f1f1f1] text-black transition-all overflow-x-hidden">
      <section className="flex flex-col justify-end items-center">
        <Marquee className="bg-black text-white h-20 overflow-hidden">
          {[...Array(5)].map((_, i) => {
            return (
              <div key={i} className="text-lg p-10">
                SUBMISSION DEADLINE :{" "}
                <span className="hover:cursor-pointer text-blue-300">
                  April 22, 2019
                </span>
              </div>
            );
          })}
        </Marquee>
        <NaviBar />

        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-7xl md:text-8xl xl:text-[175px] font-extrabold text-center">
            ICSCC 2024
          </h1>
          <h3 className="text-xl text-center">
            Organized by <b>Mar Baselios College Of Engineering Trivandrum</b>
          </h3>
        </div>
      </section>
      <section className='min-h-screen'>
          <h1>Program Comitee</h1>
          <div>
            <h2>Technical Program Committee</h2> 
            <ol>
              <li>Dr. Tsutomu Tsuboi, General Manager, Global Business Development Office, ITS Information Equipment Division, Nagoya Electric Works CO., LTD.</li>
              <li>Dr. Wajeb Gharibi, Professor, Dept. of Computer & Network Engineering, Jazan University, Saudi Arabia.</li>
              <li>Dr. Basabi Chakraborty, Professor & Head, PR&ML Lab, Iwate Prefectural University, Japan</li>
            
            </ol>
          </div>
      </section>
    </main>
  )
}

export default page
