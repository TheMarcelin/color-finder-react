// Componente Quadrado recebe três props:
// - colorValue: Nome da cor (padrão: "Sem cores" caso não seja fornecido)
// - hexValue: Código hexadecimal da cor
// - isDarkText: Booleano para definir se o texto será escuro ou claro
const Quadrado = ({colorValue = "Sem cores", hexValue, isDarkText}) => {

    return(
        <section
            className="quadrado"
            style={{
                backgroundColor: colorValue,// Define a cor de fundo com a cor selecionada
                color: isDarkText ? "#000" : "#FFF" // Define a cor do texto: preto se isDarkText for true, branco caso contrário
            }}
        >
            {/* Exibe o nome da cor ou uma mensagem padrão se nenhuma cor for selecionada */}
            <p>{colorValue ? colorValue : 'Sem cor selecionada!'}</p>
            {/* Exibe o valor hexadecimal da cor, caso exista */}
            <p>{hexValue ? hexValue : null}</p>
        </section>
        
    )
}

export default Quadrado