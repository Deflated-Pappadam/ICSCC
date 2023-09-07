import NaviBar from "@/components/NaviBar";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import landingBanner from "@/public/about-banner-2.jpg";

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
          <h1 className="text-4xl md:text-5xl lg:text-8xl mt-5 font-extrabold text-center">
            COMMITTEES
          </h1>
        </div>
      </section>
      <section className="min-h-screen px-5 xl:px-28">
        <h1 className="bg-black text-white font-bold py-3 px-2 my-3">
          Program Committee
        </h1>
        <div>
          <h2 className="font-bold">Technical Program Committee</h2>
          <ol className="list-decimal list-inside">
            <li>
              Dr. Tsutomu Tsuboi, General Manager, Global Business Development
              Office, ITS Information Equipment Division, Nagoya Electric Works
              CO., LTD.
            </li>
            <li>
              Dr. Wajeb Gharibi, Professor, Dept. of Computer & Network
              Engineering, Jazan University, Saudi Arabia.
            </li>
            <li>
              Dr. Basabi Chakraborty, Professor & Head, PR&ML Lab, Iwate
              Prefectural University, Japan
            </li>
            <li>
              Dr. Amin Al-Habaibeh, Professor of Intelligent Engg. Systems,
              Director-DTA-Ebnergy, Nottingham Trent University.
            </li>
            <li>
              Dr. Angelo Genovese, Dept. of Computer Science, Universita degli
              Studi di Milano, Milan, Italy.
            </li>
            <li>
              Dr. Adão Silva, Dept. of Telecommunication, University of Aveiro,
              Portugal.
            </li>
            <li>Dr. Davide Patti, University of Catania, Italy.</li>
            <li>Dr. Salvatore Monteleone, University of Catania, Italy.</li>
            <li>
              Prof. Vincenzo Piuri, Dipartimento di Informatica,​​​​ University
              of Milano, Italy.
            </li>
            <li>Dr. Amit Kumar Singh, University of Essex, England.</li>
            <li>
              Dr. Raghavendra K, University of Illinois, Urbana- Champaign.
            </li>
            <li>
              Dr. T V Kalyan, Dept. of Computer Science & Engineering, IIT
              Ropar.
            </li>
            <li>
              Prof. Punam Bedi, Dept. of Computer Science, University of Delhi,
              Delhi.
            </li>
            <li>
              Dr. John Jose, Assistant Professor, Dept. of CSE, IIT Guwahati.
            </li>
            <li>
              Dr. Samit Bhattacharya,Associate Professor, Dept. of CSE, IIT
              Guwahati.
            </li>
            <li>
              Dr. Venkatesh, Associate Professor, Dept. of CSE. IIT Guwhati.
            </li>
            <li>
              Dr. Moumita Patra, Assistant Professor, Dept. of CSE, IIT
              Guwahati.
            </li>
            <li>
              Dr. M Wilscy, Dean, Computer Science & IT, Saintgits College of
              Engineering,Kottayam, Kerala.
            </li>
            <li>
              Dr. Shreelekshmi R, Professor & Head, Dept. of CSE, College of
              Engineering, Trivandrum.
            </li>
            <li>
              Dr. Jegannathan L, Professor, Dept. of Computing Science &
              Engineering, VIT Chennai.
            </li>
            <li>
              Dr. Gopakumar K, Professor & Head, Dept. of ECE, TKM College of
              Engg, Kollam.
            </li>
            <li>
              Prof. Balu John, Associate Professor, Govt. Engg College,
              BartonHill.
            </li>
            <li>
              Dr. Sonia B, Associate Professor, SCT College of Engineering,
              Trivandrum.
            </li>
            <li>
              Dr. Santhosh Kumar S, Associate Professor, Dept. of ECE, College
              of Engineering, Trivandrum.
            </li>
            <li>
              Dr. Madhu S Nair, Associate Professor, Dept. of Computer Science,
              CUSAT.
            </li>
            <li>
              Dr. Firoz Mansur, Dept. of Computer & Network Engineering, Jazan
              University, Saudi Arabia.
            </li>
          </ol>
        </div>
        <h1 className="bg-black text-white font-bold py-3 px-2 mt-5 my-3">
          Advisory Committee
        </h1>
        <div>
          <ol className="list-decimal list-inside">
            <li>
              Peter Müller, Research Staff Member, IBM Research GmbH,
              Säumerstrasse, Switzerland.
            </li>
            <li>
              Dr. Ljiljana Trajkovic, Professor, School of Engineering, Science
              Simon Fraser University, Canada.
            </li>
            <li>
              Dr.Wajeb Gharibi, Professor, Dept. of Computer & Network
              Engineering, Jazan University, Saudi Arabia.
            </li>
            <li>
              Dr. Seela Veerabhadreswara Rao, Professor, Head, Dept. of Computer
              Science and Engineering, IIT Guwahati.
            </li>
            <li>
              Dr. S Lakshmivarahan, George Lynn Cross Research Professor,
              University of Oklahama, Norman, USA.
            </li>
            <li>
              Dr. Samit Bhattacharya, Associate Professor, Dept. of Computer
              Science and Engineering, IIT Guwahati.
            </li>
            <li>
              Dr. T Venkatesh, Associate Professor, Dept. of Computer Science
              and Engineering, IIT Guwahati.
            </li>
            <li>
              Dr. John Jose, Assistant Professor, Dept. of Computer Science and
              Engineering, IIT Guwahati.
            </li>
            <li>
              Sri. Krish Prasad, Vice President and General Manager, Cloud
              Platform Business, VMware Inc, California.
            </li>
            <li>
              Dr. Moumita Patra, Assistant Professor, Dept. of Computer Science
              and Engineering, IIT Guwahati.
            </li>
            <li>
              Dr. V Vijayakumar, Professor & Associate Dean, SCSE, VIT Chennai,
              India.
            </li>
            <li>
              Dr. Rajkumar Buyya, Redmond Barry Distinguished Professor,
              Director, CLOUDS Lab, University of Melbourne, Australia.
            </li>
            <li>
              Dr. B.S Manoj, Professor and Head, Avionics at Indian Institute of
              Space Science and Technology (IIST), Trivandrum.
            </li>
            <li>
              Dr. Deepak Mishra, Associate Professor at Dept. of Avionics,
              Indian Institute of Space Science and Technology, Trivandrum.
            </li>
            <li>
              Dr. Deepak Garg, Professor. Dept. of Computer Science &
              Engineering, Bennett University, Noida.
            </li>
            <li>
              Dr. Achuthsankar S Nair, Professor, Dept. of Computational Biology
              & Bioinformatics, University of Kerala, Karyavattom.
            </li>
            <li>
              Dr. Lilykutty Jacob, Professor, Dept. of Electronics &
              Communication, NIT Calicut.
            </li>
            <li>
              Dr. Jayakumari J , Professor, Dept. of Electronics &
              Communication, MBCET.
            </li>
            <li>
              Dr. Elizabeth Sherly, Professor, IIITMK, Technopark Campus,
              Trivandrum.
            </li>
            <li>
              Dr. Sabu M Thampi, Associate Professor, IIITMK, Technopark Campus,
              Trivandrum.
            </li>
          </ol>
        </div>
        <h1 className="bg-black text-white font-bold py-3 px-2 mt-5 my-3">
          Organizing Committee
        </h1>
        <div>
          <h2 className="font-bold">Patron</h2>
          <ol className="list-decimal list-inside">
            <li>
              His Beatitude Moran Mor Baselios Cardinal Cleemis Catholicos.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold">Conference General Chairs</h2>
          <ol className="list-decimal list-inside">
            <li>
              Dr. T M George, Principal, Mar Baselios College of Engieering &
              Technology.
            </li>
            <li>
              Dr. Maurizio Palesi, Associate Professor, Dept of Computer
              Engineering, University of Catania, Italy.
            </li>
            <li>Sri. Sasi P M, Executive Director, CDAC Thiruvananthapuram.</li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold">Conference co -Chairs</h2>
          <ol className="list-decimal list-inside">
            <li>Prof. S Viswanatha Rao, Vice Principal, MBCET.</li>
            <li>Dr. R Vikraman Nair, Professor, Dept. of CSE, MBCET.</li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold">Organizing Chairs</h2>
          <ol className="list-decimal list-inside">
            <li>
              Dr. Tessy Mathew, HoD, Dept. of Computer Science and Engineering,
              Mar Baselios College of Engineering & Technology.
            </li>
            <li>
              Dr. Seela Veerabhadreswara Rao, HoD, Dept. of Computer Science and
              Engineering, IIT Guwahati.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold">Technical Program Chairs</h2>
          <ol className="list-decimal list-inside">
            <li>
              Dr. LjiljanaTrajkovic, Professor , School of Engineering, Science
              Simon Fraser University, Canada.
            </li>
            <li>
              Dr. John Jose, Assistant Professor, Dept. of Computer Science and
              Engineering, IIT Guwahati.
            </li>
            <li>Dr. Jisha John, Assistant Professor, MBCET.</li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold">Convener</h2>
          <ol>
            <li>Mr. Robin Joseph, Assistant Professor, MBCET</li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold">Publication Chairs</h2>
          <ol className="list-decimal list-inside">
            <li>Dr. Jayakumari J , Professor, Dept. of Electronics & Communication, MBCET.</li>
            <li>Prof. Raju K Gopal, Professor, Dept of CSE, MBCET</li>
          </ol>
        </div>
      </section>
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

export default page;
