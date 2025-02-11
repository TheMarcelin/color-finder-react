// Componente Examples, que contém um exemplo de uma cor
const Examples = () => {
    // Componente ColorBox, responsável por renderizar um quadrado de cor
    const ColorBox = (exampleColor) => {
        return (
          // Renderiza um quadrado de 40px por 40px com cor de fundo "blue"
          <div style={{ width: "40px", height: "40px", backgroundColor: `${exampleColor}` }} />
        );
      };
    return(
       <section className="example">
            Exemplos: 
            {ColorBox('Magenta')} Magenta
            {ColorBox('Papayawhip')} PapayaWhip

       </section>
       
    )

}

export default Examples