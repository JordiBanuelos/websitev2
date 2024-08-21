import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { hero1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
   const [bigShoeImg, setBigShoeImg] = useState(hero1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-40'>
        <p className='text-3xl font-montserrat text-cyan-500'>
          Quantum Computing Club Website
        </p>
        <p className="text-2xl max-xl:padding-x font-montserrat text-cyan-500">Unlocking the Future, One Qubit at a Time 
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            What is QCC ??
          </span>
          <br />
          <span className='text-cyan-500 inline-block mt-3'>Quantum</span> Computing Club
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        The Quantum Computing Club is a community of students, researchers, and enthusiasts dedicated 
        to exploring and advancing the field of quantum computing. Our mission is to demystify 
        quantum mechanics and its applications in computing, while fostering an environment of learning,
        collaboration, and innovation.
        </p>

        <Button label='Learn More' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
