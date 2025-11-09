'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Carousel from '../components/ui/Carousel.jsx';
import TestimonialsCarousel from '../components/ui/TestmonialsCarousel.jsx'
import ButtonPrimary from '@/components/ui/Buttonprimary.jsx';
import Input from '../components/ui/Input.jsx';
import Features from '../components/ui/Feature.jsx';



const backgroundimage = '/guardacorpoescada.png'

const imagesbussines = [
  '/itaulogo.avif',
  '/carrefourlogo.svg',
  '/riachuelo.svg',
  '/habibslogo.svg',
  '/o-boticario.svg',
  '/worldtennis.png'
];

const images = [
  '/esquadria.jpg',
  '/faxada.jpg',
  '/guardacorpoescada.png',
  '/portadacaixa.jpg',
  '/janela.jpg'
];

const testmonials = [
  {
    name: "Leandro Tenorio",
    date: "07/10/2024",
    stars: 5,
    message: "Excelente serviço, muito satisfeito!",
    image: "/fotoperfil.jpg",
  },
  {
    name: "Maria Silva",
    date: "05/09/2024",
    stars: 4,
    message: "Muito bom, mas poderia melhorar o atendimento.",
    image: "/fotoperfil.jpg",
  },
  {
    name: "Carlos Souza",
    date: "12/08/2024",
    stars: 5,
    message: "Atendimento ótimo, recomendo!",
    image: "/fotoperfil.jpg",
  },
  {
    name: "João Oliveira",
    date: "22/07/2024",
    stars: 4,
    message: "Bom, mas poderia ter mais opções.",
    image: "/fotoperfil.jpg",
  },
];

export default function HomePage() {
  return (
    <section className="bg-white shadow-lg">

      {/* HERO com imagem de fundo profissional */}
      <div className=" bg-gray-100 relative mt-[30px] xs:mt-[50px]  sm:mt-[40px] flex items-center justify-center text-center  h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="relative py-[4rem] z-10 mr-[100px] flex flex-col items-start gap-5 sm:max-w-xl">
          <h1 className="text-[20px] mb-2 xs:text-[30px] sm:text-[60px] font-medium text-blue-700 text-left">
            Soluções de Vidros para Seu Projeto
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl font-semibold text-left">
            Qualidade, segurança e design para transformar seus ambientes com elegância e sofisticação.
          </p>
          <ul className="space-y-2 text-gray-700 text-left sm:text-lg font-medium">
            <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-700 flex-shrink-0" />Mais de 36 anos de experiência</li>
            <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-700 flex-shrink-0" />Acabamento impecável</li>
            <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-700 flex-shrink-0" />Instalação profissional</li>
            <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-700 flex-shrink-0" />Conformidade com as normas de segurança</li>
          </ul>
          <ButtonPrimary />
        </div>
        <div className="flex-1 w-full max-w-[800px]">
          <img src="/imgs/img-1.jpg" alt="Vidro em Projeto" className="w-full h-auto object-cover rounded-2xl shadow-lg"/>
        </div>
      </div>

      {/* Seção Obras */}
      <div className=" text-center mt-8">
        <Carousel 
        images={images}
        speed={1}
        showButtons={true}
        showIndicators={true}
        />
      </div>
      <div className='text-center'>
        <TestimonialsCarousel 
        reviews={testmonials}
        testmonials={testmonials}/>
      </div>
      <h2 className='text-5xl text-center flex justify-center py-4 sm:text-6xl font-bold text-blue-700'>PARCEIROS</h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <Image className="col-span-2 max-h-[70px] w-full object-contain lg:col-span-1" src={imagesbussines[0]} alt="Transistor" width={100} height={60} />
        <Image className="col-span-2 max-h-[55px] object-contain lg:col-span-1" src={imagesbussines[1]} alt="Reform" width={100} height={60} />
        <Image className="col-span-2 mx-auto max-h-[40px] object-contain lg:col-span-1" src={imagesbussines[2]}  alt="Reform" width={100} height={60} />
        <Image className="col-span-2 max-h-[40px] object-contain sm:col-start-2 lg:col-span-1" src={imagesbussines[3]}  alt="Reform" width={100} height={60} />
        <Image className="col-span-2 mx-auto max-h-[90px] object-contain sm:col-start-2 lg:col-span-1" src={imagesbussines[4]}  alt="Reform" width={100} height={60} />
        <Image className="col-span-2 max-h-[50px] object-contain sm:col-start lg:col-span-1" src={imagesbussines[5]}  alt="Reform" width={100} height={60} />
      </div>
      <Input/>
      <Features/>
    </section>
  );
}
