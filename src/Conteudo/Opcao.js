

export default function Opcao (props) {

    

    return (
       <div className="card">
            <img className="imagem-cardapio" src={props.imagem} />
            <p className="titulo-card">{props.titulo}</p>
            <p className="descricao"> {props.descricao}</p>
            <div className="card-bottom">
                <p className="preco-card">R$ <span>{props.preco}</span></p>
                <ion-icon name="checkmark-circle" className="simbolo-check"></ion-icon>
            </div>
        </div>
    )
}