import React from "react";
import Topo from "./Topo"
import Conteudo from "./Conteudo/Conteudo"
import Bottom from "./Bottom"
export default function () {
	let mensagem = ''
	let botaoHabilitado = false
	
	function mensagemProPai (mensagemFilho, botao) {
		mensagem = mensagemFilho
		botaoHabilitado = botao
		console.log(mensagemFilho)
		
	}

    return (
    <>
       <Topo empresa = "DrivenEats" subtitulo="Sua comida em 6 minutos" />
		<Conteudo mensagemProPai={mensagemProPai}/>	
		
    </>
    )
}