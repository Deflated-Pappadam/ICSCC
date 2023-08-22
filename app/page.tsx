import Speaker from "@/components/Speaker";
import Schedule from "@/components/Schedule";
import Image from "next/image";
import landingBanner from "@/public/about-banner-2.jpg";

import speaker1 from "@/public/speaker.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f1f1f1] text-black">
      <section className="flex flex-col min-h-screen justify-end items-center">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-7xl md:text-8xl xl:text-[175px] font-extrabold">ICSCC 2024</h1>
          <h3 className="text-xl text-center">Organized by <b>Mar Baselios College Of Engineering Trivandrum</b></h3>
          <button className="mb-5 mt-20 text-2xl bg-black text-white rounded-2xl px-5 py-2 font-semibold">Register</button>
        </div>
        <Image src={landingBanner} alt="" placeholder="blur" />
      </section>
      <section className="bg-red-300 flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">About</h1>
        <h2 className="max-w-3xl text-justify">We would like to invite you to contribute to and participate in the 9th International Conference on Smart Computing and Communication (ICSCC 2023), which will be held in Kochi, Kerala during August 17 – 19, 2023</h2>
      </section>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <section id="schedules">
        <Schedule />
        <Schedule />
        <Schedule />
        <Schedule />
      </section>

      <section id="speakers" className="flex w-full h-screen"
      >
        <div>
          <div className="text-[40px] font-light text-center">Speakers</div>
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
        /><Speaker
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

      <footer>
      </footer>

    </main>
  );
}
