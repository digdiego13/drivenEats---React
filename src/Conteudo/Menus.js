import Opcao from "./Opcao"


export default function Menus (props) {

    return (
        <>
        <h2>{props.etapa}</h2>
        <div className="menus">
            {props.tipo.map((opcao, index) => (
                <Opcao 
                key = {index}
                titulo = {opcao.titulo}
                imagem = {opcao.imagem}
                descricao = {opcao.descricao}
                preco = {Number(opcao.preco).toFixed(2)}
                />
            ))}
        </div>
        </>
    )
}