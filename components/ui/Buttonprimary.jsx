function Button({link, children}){    
    return (
        <button><a href={link} // Usando o link diretamente na tag <a>
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Segurança ao abrir link em nova aba
      className="px-4 py-1 mb-8 bg-blue-800 text-[15px] font-bold text-white rounded hover:bg-gray-400 transition">
        {children}
        </a></button>
    )
}

export default function ButtonPrimary () {

    return (
        <div>
            <Button link={"https://wa.me/message/OZRHJEC66R6LD1"}>Solicitar Orçamento</Button>
        </div>
    )

}