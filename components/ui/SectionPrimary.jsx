import ButtonPrimary from "./Buttonprimary"
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function PrimarySetion(){

return(
        <div className=" bg-gray-100 relative mt-[30px] xs:mt-[50px]  sm:mt-[40px] flex items-center justify-center text-center  h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
            <div className="relative py-[4rem] z-10 mr-[100px] flex flex-col items-start gap-5 sm:max-w-xl">
            <h1 className="text-[20px] mb-2 xs:text-[30px] sm:text-[60px] font-medium text-blue-800 text-left">
                Soluções de Vidros para Seu Projeto
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl font-semibold text-left">
                Qualidade, segurança e design para transformar seus ambientes com elegância e sofisticação.
            </p>
            <ul className="space-y-2 text-gray-700 text-left sm:text-lg font-medium pb-6">
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />Mais de 36 anos de experiência</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />Acabamento impecável</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />Instalação profissional</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />Conformidade com as normas de segurança</li>
            </ul>
          <ButtonPrimary />
        </div>
        <div className="flex-1 w-full max-w-[800px]">
          <img src="/imgs/img-1.jpg" alt="Vidro em Projeto" className="w-full h-auto object-cover rounded-2xl shadow-lg"/>
        </div>
    </div>
    
    )
}