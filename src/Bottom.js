import React from "react";
export default function Bottom ({mensagem, botaoHabilitado}) {
    
    console.log("hab bottom", botaoHabilitado)
    function fecharPedido () {
        let msgWpp = encodeURIComponent(mensagem);
        let linkWpp = "https://wa.me/5521979778806?text=" + msgWpp;
        return linkWpp
    }
    
    
    if(botaoHabilitado) {
        
        console.log("Botao habilitado bottom")
        return (
            <div className="bottom">
			<a href={`${fecharPedido()}`} className="botao-habilitado " ><p className="escrita-desabilitado"><strong>Fechar Pedido</strong></p></a>
			
		</div>
        )
    }

    return (
        <div className="bottom">
			<div className="botao-desabilitado">
                <p className="escrita-desabilitado">Selecione os 3 itens<br /> para fechar o pedido</p>
            </div>
			
			
		</div>
    )
}
