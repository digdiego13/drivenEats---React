export default function Bottom () {

    return (
        <div className="bottom">
			<div className="botao-desabilitado">
                <p className="escrita-desabilitado">Selecione os 3 itens<br /> para fechar o pedido</p>
            </div>
			<div className="botao-habilitado escondido"onclick="resumoPedido()"><p className="escrita-desabilitado"><strong>Fechar Pedido</strong></p></div>
			
		</div>
    )
}
