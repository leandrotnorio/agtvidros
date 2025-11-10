'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Input from '../components/ui/Input.jsx';
import Features from '../components/ui/Feature.jsx';
import CardPrimary from '@/components/ui/SectionPrimary.jsx';
import { Home, Droplets, Grid, DoorClosed, PanelsTopLeft, LayoutGrid } from 'lucide-react';
import ServicosSection from '@/components/ui/ServicosSection.jsx';
import PrimarySetion from '@/components/ui/SectionPrimary.jsx';
import ProjetosSection from '@/components/ui/ProjetosSection.jsx';


const servicos = [
  {
    titulo: 'Janelas e Portas',
    descricao: 'Janelas e portas de vidro temperado com design moderno e alta durabilidade.',
    imagem: '/imgs/img-janelaseportas.jpg',
    icone: Home,
  },
  {
    titulo: 'Box para Banheiro',
    descricao: 'Box de vidro temperado para banheiros com diferentes modelos e acabamentos.',
    imagem: '/imgs/img-box-banheiros.jpg',
    icone: Droplets,
  },
  {
    titulo: 'Espelhos',
    descricao: 'Espelhos decorativos e funcionais com corte personalizado para qualquer ambiente.',
    imagem: '/imgs/img-personalisados.jpg',
    icone: Grid,
  },
  {
    titulo: 'Guarda-Corpos',
    descricao: 'Guarda-corpos de vidro temperado para sacadas, escadas e mezaninos.',
    imagem: '/imgs/img-guarda-corpo.jpg',
    icone: DoorClosed,
  },
  {
    titulo: 'Vidros Especiais',
    descricao: 'Vidros laminados, temperados, fumê, bronze e espelhados.',
    imagem: '/imgs/img-vidros-especiais.jpg',
    icone: PanelsTopLeft,
  },
  {
    titulo: 'Projetos Personalizados',
    descricao: 'Desenvolvimento de projetos sob medida para residências e empresas.',
    imagem: '/imgs/img-personalisados',
    icone: LayoutGrid,
  },
];



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

      {/* seção principal com imagem profissional */}
        <PrimarySetion/>
      {/* Seção Nossos Seriços */}
        <ServicosSection/>
      {/* Formulário de cadastro */}
      <ProjetosSection/>
      {/* Filtragem de projetos */}
        <Input/>
      {/* Icones de autoridade */}
        <Features/>
    </section>
  );
}
