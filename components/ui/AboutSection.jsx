"use client";

import { Award, Users, Clock, ThumbsUp, CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Conteúdo à esquerda */}
        <div>
          <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 cursor-default">
            Sobre Nós
          </button>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Excelência em Soluções de Vidro há Mais de <br />
            <span className="text-blue-700">36 Anos</span>
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A <strong>AGT</strong> é especializada em fornecer soluções completas em vidro
            para projetos residenciais e comerciais. Nossa equipe altamente
            qualificada trabalha com os mais modernos equipamentos e técnicas do
            mercado.
          </p>

          <p className="text-gray-700 mb-10 leading-relaxed">
            Nosso compromisso é oferecer produtos de alta qualidade, com design
            inovador e instalação profissional, garantindo a satisfação total
            de nossos clientes.
          </p>

          {/* Benefícios */}
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Qualidade Certificada</p>
                <p className="text-gray-600 text-sm">
                  Trabalhamos apenas com vidros certificados e que atendem todas as normas de segurança.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Equipe Especializada</p>
                <p className="text-gray-600 text-sm">
                  Profissionais altamente capacitados e com vasta experiência no mercado.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Garantia Estendida</p>
                <p className="text-gray-600 text-sm">
                  Oferecemos garantia estendida em todos os nossos produtos e serviços.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Cards à direita */}
        <div className="grid grid-cols-2 gap-6">
          {/* Projetos Concluídos */}
          <div className="bg-blue-50 rounded-2xl flex flex-col items-center justify-center py-10 shadow-sm hover:shadow-md transition">
            <Award className="w-10 h-10 text-blue-700 mb-3" />
            <p className="text-3xl font-bold text-gray-900">500+</p>
            <p className="text-gray-600">Projetos Concluídos</p>
          </div>

          {/* Clientes Satisfeitos */}
          <div className="bg-blue-50 rounded-2xl flex flex-col items-center justify-center py-10 shadow-sm hover:shadow-md transition">
            <Users className="w-10 h-10 text-blue-700 mb-3" />
            <p className="text-3xl font-bold text-gray-900">450+</p>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>

          {/* Anos de Experiência */}
          <div className="bg-blue-50 rounded-2xl flex flex-col items-center justify-center py-10 shadow-sm hover:shadow-md transition">
            <Clock className="w-10 h-10 text-blue-700 mb-3" />
            <p className="text-3xl font-bold text-gray-900">36+</p>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>

          {/* Taxa de Satisfação */}
          <div className="bg-blue-50 rounded-2xl flex flex-col items-center justify-center py-10 shadow-sm hover:shadow-md transition">
            <ThumbsUp className="w-10 h-10 text-blue-700 mb-3" />
            <p className="text-3xl font-bold text-gray-900">98%</p>
            <p className="text-gray-600">Taxa de Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
