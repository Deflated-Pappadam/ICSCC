import Speaker from "@/components/Speaker";
import Schedule from "@/components/Schedule";
import Image from "next/image";
import landingBanner from "@/public/about-banner-2.jpg";
import Marquee from "react-fast-marquee";
import speaker1 from "@/public/speaker.jpg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f1f1f1] text-black transition-all overflow-x-hidden">
      <section className="flex flex-col min-h-screen justify-end items-center">
        <Marquee>
          <div className="text-lg p-10">
          BEST PAPER AWARD FOR ALL TRACKS HAVE BEEN DECLARED <span className="hover:cursor-pointer text-blue-300">KNOW MORE</span> 
          </div>
        </Marquee>
        <nav
          id="nav"
          className="flex text-2xl w-full justify-center text-center pt-[50px] "
        >
          <div className="md:flex hidden w-[30%] justify-between">
            <div>Home</div>
            <div>Schedule</div>
            <div>Committees</div>
            <div>Events</div>
          </div>
          <div className="md:hidden flex w-[%] justify-between">

          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-7xl md:text-8xl xl:text-[175px] font-extrabold">
            ICSCC 2024
          </h1>
          <h3 className="text-xl text-center">
            Organized by <b>Mar Baselios College Of Engineering Trivandrum</b>
          </h3>
          <button className="mb-5 mt-20 text-2xl bg-black text-white rounded-2xl px-5 py-2 font-semibold">
            Register
          </button>
        </div>
        <div className="flex md:w-full md:h-full h-[250px] w-[800px] justify-center ">
          <Image src={landingBanner} alt="" placeholder="blur" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-[90%] flex justify-start text-[40px]">
Welcome to ICSCC 2024 <br />
Thiruvanathapuram, India | August 17 – 19, 2024
</div>
        <div className="flex w-[90%] mx-auto mt-10 justify-between ">
          <h2 className="max-w-3xl text-xl text-justify">
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
          <div className="w-[30%] md:flex hidden">
            <Image src={landingBanner} alt="" placeholder="blur" />
          </div>
        </div>
      </section>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <section id="schedules" className="md:h-full ">
        <div className="text-[50px] text-center my-10">
          Dates To Remember
        </div>
        <div className="flex md:flex-row flex-col w-[95%] mx-auto">
          <Schedule />
          <Schedule />
        </div>

        <div className="flex md:flex-row flex-col">
          <Schedule />
          <Schedule />
        </div>
        <div className="flex md:flex-row flex-col  w-[95%] mx-auto">
          <Schedule />
          <Schedule />
        </div>
      </section>

      <section id="speakers" className="mt-5 flex w-[90%] h-full mx-auto">
        <div>
          <div className="text-[50px]  text-center my-10">Speakers</div>
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
      <section id="Venue"></section>

      <footer
        id="footer"
        className="flex justify-around w-[90%] mx-auto my-5 bg-black min-h-[300px] text-white p-5"
      >
        <div className="flex flex-col   md:text-2xl text-xl md:flex-row md:w-[50%] w-[90%] md:mx-auto md:justify-between ">
          <div className="flex flex-col my-auto">
            <div className="font-medium">Venue Adress</div>
            <div className="mt-2 font-thin ">Mar Baselios College Of Engineering</div>
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
