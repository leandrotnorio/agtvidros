"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl text-blue-800 font-medium text-center mb-4">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Solicite um orçamento sem compromisso. Nossa equipe está pronta para atender você!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-2 bg-gray-100 p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Solicite seu Orçamento</h3>
            <p className="text-gray-700 font-medium mb-6">
              Preencha o formulário abaixo e retornaremos em até 24 horas.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  placeholder="Descreva seu projeto ou necessidade..."
                  rows={4}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-2xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Telefone</h4>
                <p className="text-gray-600">(11) 4002-8922</p>
                <p className="text-gray-600">(11) 98765-4321</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-2xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">E-mail</h4>
                <p className="text-gray-600">contato@agtvidros.com.br</p>
                <p className="text-gray-600">vendas@agtvidros.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-2xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Endereço</h4>
                <p className="text-gray-600">
                  Av. Paulista, 1000<br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-100 p-6 rounded-2xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Horário de Funcionamento</h4>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
