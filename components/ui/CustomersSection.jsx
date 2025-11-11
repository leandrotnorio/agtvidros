"use client";

import Image from "next/image";

export default function CustomersSection() {
  const clientes = [
    { nome: "Itaú", imagem: "/itaulogo.avif" },
    { nome: "Carrefour", imagem: "/carrefourlogo.svg" },
    { nome: "Riachuelo", imagem: "/riachuelo.svg" },
    { nome: "Habib's", imagem: "/habibslogo.svg" },
    { nome: "O Boticário", imagem: "/o-boticario.svg" },
    { nome: "World Tennis", imagem: "/worldtennis.png" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-blue-800">
            Principais Clientes
          </h2>
          <p className="text-gray-700 font-bold mt-3">
            Empresas que confiam em nossos serviços e qualidade
          </p>
        </div>

        {/* Grade 2 colunas x 3 linhas */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-16 justify-items-center">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3"
            >
              <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <Image
                  src={cliente.imagem}
                  alt={cliente.nome}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <span className="text-gray-700 text-lg font-medium">
                {cliente.nome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
