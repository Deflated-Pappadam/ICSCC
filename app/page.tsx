"use client";

import Speaker from "@/components/Speaker";
import Schedule from "@/components/DropDown";
import Image from "next/image";
import landingBanner from "@/public/about-banner-2.jpg";
import conferenceImage from "@/public/pexels-luis-quintero-2833037.jpg";
import Marquee from "react-fast-marquee";
import speaker1 from "@/public/speaker.jpg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import NaviBar from "@/components/NaviBar";
import { useState } from "react";
import DropDown from "@/components/DropDown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f1f1f1] text-black transition-all overflow-x-hidden">
      <section className="flex flex-col min-h-screen justify-end items-center">
        <Marquee className="bg-black text-white h-20 overflow-hidden">
          {[...Array(5)].map((_, i) => {
            return (
              <div key={i} className="text-lg p-10">
                BEST PAPER AWARD FOR ALL TRACKS HAVE BEEN DECLARED{" "}
                <span className="hover:cursor-pointer text-blue-300">
                  KNOW MORE
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
          <button className="mb-5 mt-10 text-2xl bg-black hover:bg-slate-700 text-white rounded-2xl px-5 py-2 font-semibold">
            Register
          </button>
        </div>
        <div className="flex md:w-full md:h-full h-[250px] w-[800px] justify-center ">
          <Image src={landingBanner} alt="" placeholder="blur" />
        </div>
      </section>

      <section className="flex px-5 w-[90%] mx-auto  mt-10 md:mt-20 justify-between">
        <div className="flex flex-col gap-14 mt-10 justify-between md:w-[50%]">
          <div className="w-[90%] text-lg sm:text-xl md:text-[36px] font-semibold ">
            Welcome to ICSCC 2024 <br />
            <div className="md:text-[30px] text-base text-gray-800 my-5">
              Thiruvanathapuram, India
            </div>
          </div>
          <div className="bg-black text-[20px] p-2 mt-2 text-white w-full md:w-[220px]">
            August 17 – 19, 2024
          </div>
          <h2 className="flex-1 md:text-xl text-justify">
            We would like to invite you to contribute to and participate in the
            9th International Conference on Smart Computing and Communication
            (ICSCC 2023), which will be held in Kochi, Kerala during August 17 –
            19, 2023. ICSCC 2023 will offer researchers, delegates and scholars
            an incredible chance to interact with each other and share their
            experience and knowledge in ‘Intelligent Technologies and
            Applications’. The goal of ICSCC 2023 is to provide the perfect
            platform for researchers and practitioners from academia and
            industry to share their experience, foster collaborations among
            industry and academia, and get enlightened about the state-of
            the-art advancements in their respective domains. <br />
            <br />
            The theme for ICSCC 2023 is ‘Intelligent Technologies and
            Applications’. The 9th edition of ICSCC aims to provide the
            delegates the perfect stage to discuss the recent advancements and
            latest technological trends on Intelligent Technologies and their
            practical applications in diverse domains related to Computer
            Science, Communication, and Energy Systems. Looking forward to
            seeing you at ICSCC in Kochi, India in August 2023!
          </h2>
        </div>
        <div className="w-[40%]  md:flex flex-wrap hidden">
          <Image src={conferenceImage} alt="" placeholder="blur" />
        </div>
      </section>
      <br className="text-black" />
      <section id="speakers" className="md:h-full my-10 mx-auto max-w-[90%]">
        <div>
          <div className="text-2xl py-6 bg-black text-white  sm:text-black sm:bg-transparent md:text-[50px] font-semibold text-center my-10">
            Speakers
          </div>
          <div className="flex flex-wrap gap-y-2 justify-center ">
            <Speaker
              image={speaker1}
              url=""
              name="Dr. Nitin Seth"
              desc="Director, Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA)"
            />
            <Speaker
              image={speaker1}
              url=""
              name="Dr. Nitin Seth"
              desc="Director, Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA)"
            />
            <Speaker
              image={speaker1}
              url=""
              name="Dr. Nitin Seth"
              desc="Director, Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA)"
            />
            <Speaker
              image={speaker1}
              url=""
              name="Dr. Nitin Seth"
              desc="Director, Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA)"
            />
            <Speaker
              image={speaker1}
              url=""
              name="Dr. Nitin Seth"
              desc="Director, Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA)"
            />
            <Speaker
              image={speaker1}
              url=""
              name="Dr. Nitin Seth"
              desc="Director, Indo-French Centre for the Promotion of Advanced Research (IFCPAR/CEFIPRA)"
            />
          </div>
        </div>
      </section>
      <section id="tracks" className="md:h-full my-10 mx-auto max-w-[90%]">
        <div className="text-2xl py-4 bg-black text-white  md:text-black md:bg-transparent md:text-[50px] font-semibold text-center mt-5 md:my-10">
          Tracks
        </div>

        <h2 className="flex-1 mt-5 md:text-xl text-center font-semibold text-md">
          The theme for ICSCC 2023 is ‘Intelligent Technologies and
          Applications’. The 9th edition of ICSCC aims to provide the delegates
          the perfect stage to discuss the recent advancements and latest
          technological trends on Intelligent Technologies and their practical
          applications in diverse domains related to Computer Science,
          Communication, and Energy Systems. Topics of interest for ICSCC 2023
          include, but are not limited to:
        </h2>

        <div className="flex md:flex-row flex-col w-[95%] mx-auto">
          <div className="flex  flex-col">
            <DropDown
              header="Smart Computing"
              desc="Artificial Intelligence and Machine Learning; Trusted Computing; Cloud Computing; Data Management, Exploration and Mining; Grid Computing; Mobile Computing; Natural Language Processing and Machine Translation; P2P Competing Parallel and Distributed Algorithms; Pattern Recognition and Analysis; Reconfigurable Computing Robotics and Human Machine Interface Security; Trust and Privacy Simulation; Modeling Systems and Software Engineering; Ubiquitous and High-Performance Computing."
            />
            <DropDown
              header="Communication and Signal Processing"
              desc="Cognitive Radio and Cognitive Networks; Communication Architecture; Algorithms, Modeling and Evaluation; Control Systems and Applications; Delay Tolerant Networks; Fault Tolerance, Reliability and Survivability; Flow and Congestion Control; Multimedia and Real-Time Networking; Optical Networks and Systems Protocols and Standards; Satellite and Space Communications; Sensor/Embedded Networks and Pervasive; Computing Smart Spaces and Personal Area Networks; Social Network Behaviors; Modeling, And Analysis; Vehicular, Underground and Underwater Networks; Software Defined Networking. , Smart Grid Systems, Intelligent Control, Robotics, Smart Communication System Models."
            />
            <DropDown
              header="Technology (Systems for a secure world)"
              desc="5G Networks & Internet of Things (IoT); Heterogeneous Networks; Web of Things; High Performance Internet Protocols; Identity Management and Object Recognition; Information Theory and Coding; Internet Security and Privacy Localization; Technologies Mobility Models and Mobile Networks Mobility; Localization and Management Aspects Routing and Control Protocols; Wearables, Body Sensor Networks; Smart Portable Devices; Web-based Learning; Innovation and Challenges. , Smart Machine learning Systems and models, Deep learnt networks, Evolutionary Systems,NLP, Secture Systems, IoT/IoE Security."
            />
          </div>

          <div className="flex  flex-col ">
            <DropDown
              header="Intelligent Systems and Analytics"
              desc="Agricultural Informatics and Communication; Big Data Analytics; Bio-inspired Optimization; Community Information Systems; Remote Sensing; GIS and GPS; Disaster Management; E-governance; E-Commerce; E-Business; E-Learning Forensics and Informatics; Informatics Hybrid Evolutionary Algorithms; Hybrid Intelligent Systems; Neural Networks; Neuro-Fuzzy Models and Applications; Neuro Informatics Open Source: Challenges and Opportunities; Smart grid and Renewable Energy."
            />
            <DropDown
              header="Smart Embedded Systems"
              desc="Low Power Electronics; VLSI Systems; Nano Electronics; FPGA Development; System on Chip; Embedded Applications; Embedded Memory Architecture; System Automation; Power Electronics and Control Scheme."
            />
            <DropDown
              header="Power Systems, Energy Systems and Power Electronics"
              desc="Power Generation; Transmission and Distribution; Power System Monitoring; Control and Protection; Energy: Renewable Energy Sources , Grid integration of renewables, system integration of renewables, power system operation and control, power electronics for renewables, grid code regulation, demand side response, forecasting of renewable resources and load; Microgrids, smart grids and distributed generation: Architecture, sizing, topologies and control methods, distributed generation; Energy storage: methods, modelling, design and simulation. Electric Vehicles: Charging (slow, medium, boost), battery management system, hybrid vehicles, grid integration of electric vehicles. Control theory and applications: Industrial Applications of Control, Process Control Systems."
            />
          </div>
        </div>
      </section>
      <section id="schedules" className="md:h-full my-10 mx-auto max-w-[90%">
        <div className="text-2xl py-6 bg-black text-white  md:text-black md:bg-transparent md:text-[50px] font-semibold text-center mt-5 md:my-10">
          Dates To Remember
        </div>
        <div className="border rounded-lg flex justify-between items-center bg-black my-2 py-5 px-6 text-white">
          <p className="font-bold">Call for paper open</p>
          <div>27th Mar 2023</div>
        </div>
        <div className="border rounded-lg flex justify-between items-center bg-black my-2 py-5 px-6 text-white">
          <p className="font-bold">Full paper submission deadline</p>
          <div>18th May 2023</div>
        </div>
        <div className="border rounded-lg flex justify-between items-center bg-black my-2 py-5 px-6 text-white">
          <p className="font-bold">Nortification of Acceptance</p>
          <div>15th June 2023</div>
        </div>
        <div className="border rounded-lg flex justify-between items-center bg-black my-2 py-5 px-6 text-white">
          <p className="font-bold">Camera Ready Submission</p>
          <div>20th July 2023</div>
        </div>
        <div className="border rounded-lg flex justify-between items-center bg-black my-2 py-5 px-6 text-white">
          <p className="font-bold">Conference</p>
          <div>17th 18th 19th August 2023</div>
        </div>
      </section>
      <section id="Venue"></section>

      <footer
        id="footer"
        className="flex justify-around w-full mx-auto mt-5 bg-black min-h-[300px] text-white p-5"
      >
        <div className="flex flex-col   md:text-2xl text-xl md:flex-row md:w-[50%]  md:mx-auto md:justify-between ">
          <div className="flex flex-col my-auto">
            <div className="font-medium">Venue Adress</div>
            <div className="mt-2 font-thin ">
              Mar Baselios College Of Engineering
            </div>
            <div className="font-thin  ">Nalanchira , Thiruvananthapuram</div>
            <div className="font-thin  ">Kerala, India</div>
          </div>

          <div className="flex flex-col  my-auto">
            <div className="font-medium">Contact Us</div>
            <a href="">
              <div className="md:mt-2 font-thin cursor-pointer ">phone</div>
            </a>
            <a href="">
              <div className="font-thin cursor-pointer ">Instagram</div>
            </a>
            <a href="">
              <div className="font-thin cursor-pointer ">Website</div>
            </a>
          </div>
          <div className="md:flex hidden flex-col  my-auto">
            <div className="text-3xl font-semibold underline leading-relaxed tracking-wider">
              Register
            </div>
            <div className="text-black">.</div>
          </div>
        </div>
        <div className="md:hidden flex h-full  my-auto text-2xl font-semibold underline m-2">
          Register
        </div>
      </footer>
    </main>
  );
}
