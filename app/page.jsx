'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Features from '../components/ui/Feature.jsx';
import CardPrimary from '@/components/ui/SectionPrimary.jsx';
import { Home, Droplets, Grid, DoorClosed, PanelsTopLeft, LayoutGrid } from 'lucide-react';
import PrimarySetion from '@/components/ui/SectionPrimary.jsx';
import ServicosSection from '@/components/ui/ServicesSection.jsx';
import ProjetosSection from '@/components/ui/ProjectsSection.jsx';
import ContactSection from '@/components/ui/ContactSection.jsx';
import AboutSection from '@/components/ui/AboutSection.jsx';
import CustomersSection from '@/components/ui/CustomersSection.jsx';


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






export default function HomePage() {
  return (
    <section className="bg-white shadow-lg">

      {/* seção principal com imagem profissional */}
        <PrimarySetion/>
      {/* Seção Nossos Serviços */}
        <ServicosSection/>
      {/* Filtragem de projetos */}
      <ProjetosSection/>
      {/* Sobre a empresa */}
      <AboutSection/>
      {/* Princípais clientes */}
      <CustomersSection/>
      {/* Formulário de cadastro */}
      <ContactSection/>
      {/* Icones de autoridade*/}
        {/*<Features/>*/}
    </section>
  );
}
