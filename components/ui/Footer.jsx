import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + DESCRIÇÃO */}
        <div>
          <h1 className="text-2xl font-bold text-white">AGT</h1>
          <p className="mt-4 text-sm leading-relaxed">
            Soluções em vidro com qualidade e excelência há mais de 36 anos no mercado.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Link href="#" className="bg-gray-800 p-2 rounded-md hover:bg-blue-600 transition">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="bg-gray-800 p-2 rounded-md hover:bg-blue-600 transition">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="bg-gray-800 p-2 rounded-md hover:bg-blue-600 transition">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* LINKS RÁPIDOS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Início</Link></li>
            <li><Link href="#servicos" className="hover:text-white">Serviços</Link></li>
            <li><Link href="/galeria" className="hover:text-white">Galeria</Link></li>
            <li><Link href="/about" className="hover:text-white">Sobre Nós</Link></li>
            <li><Link href="#contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        {/* SERVIÇOS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2">
            <li>Janelas e Portas</li>
            <li>Box para Banheiro</li>
            <li>Espelhos</li>
            <li>Guarda-Corpos</li>
            <li>Vidros Especiais</li>
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-center">
              <Phone size={16} /> (11) 4002-8922<br /> (11) 98765-4321
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={16} /> contato@agtvidros.com.br
            </li>
            <li className="flex gap-2 items-start">
              <MapPin size={16} />
              Av. Paulista, 1000
              <br />
              São Paulo - SP, 01310-100
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2025 AGT. Todos os direitos reservados.
      </div>
    </footer>
  );
}

