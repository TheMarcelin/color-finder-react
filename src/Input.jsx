// Importa a função colorNames que converte o nome da cor (em inglês) para o código hexadecimal correspondente
import colorNames from "colornames"

// Componente Input recebe as seguintes props:
// - colorValue: o valor atual da cor
// - setColorValue: função para atualizar o nome da cor
// - setHexValue: função para atualizar o valor hexadecimal da cor
// - isDarkText: indica se o texto deve ser escuro ou claro
// - setIsDarkText: função para alternar o estado de cor do texto
const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
    return(
        // Formulário para entrada de cor
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Escolha uma cor</label>
            <input
                autoFocus // O campo será focado automaticamente ao carregar a página
                type="text" 
                placeholder="Escolha uma cor (em inglês)" // Indica ao usuário que ele deve inserir o nome da cor em inglês
                required // Torna o campo obrigatório
                value={colorValue}  // O valor do campo de entrada é controlado pelo estado colorValue
                onChange={(e) => {
                    setColorValue(e.target.value);  // Atualiza o nome da cor com o valor digitado
                    setHexValue(colorNames(e.target.value)); // Converte o nome da cor para o código hexadecimal e atualiza o estado hexValue
                }}
            />
            {/* Botão para alternar a cor do texto */}
            <button 
                type="button"
                onClick={()=> setIsDarkText(!isDarkText)} // Alterna entre texto escuro e claro
            >
                Mude a cor do texto
            </button>
        </form>
    )
}

export default Input