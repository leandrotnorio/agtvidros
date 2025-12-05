'use client'

import Image from 'next/image';
import React from 'react';
import { Home, Droplets, Grid, DoorClosed, PanelsTopLeft, LayoutGrid } from 'lucide-react';

const servicos = [
  {
    titulo: 'Janelas e Portas',
    descricao: 'Janelas e portas de vidro temperado com design moderno e alta durabilidade.',
    imagem: '/imgs/img-janelaseportas.jpg',
    icone: DoorClosed,
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
    imagem: '/imgs/espelhos.jpg',
    icone: LayoutGrid,
  },
];


export default function ServicosSection(){

    return(
<section id='services' className='py-14 bg-white'>
  <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[40px] font-medium text-blue-800 mb-3">Nossos Serviços</h2>
        <p className="text-gray-700 font-bold mb-12">
          Oferecemos uma ampla gama de soluções em vidro para atender todas as suas necessidades.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {servicos.map((servico, index) => {
            const Icone = servico.icone;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">
                <div className="relative h-64 w-full">
                  <Image
                    src={servico.imagem}
                    alt={servico.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left">
                  <div className="flex items-center mb-3">
                    <Icone className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{servico.titulo}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{servico.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
      )
    }