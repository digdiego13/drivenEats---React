export default function Opcao (props) {

    return (
        <div onclick="comidaPedida(this)" className="prato">
                <img className="imagem-cardapio" src={props.imagem} />
                <p className="titulo-prato">{props.titulo}</p>
                <p className="descricao"> {props.descricao}</p>
                <p className="preco-prato">R$ <span>{props.preco}</span></p>
                <ion-icon name="checkmark-circle" className="simbolo-check"></ion-icon>
        </div>
    )
}