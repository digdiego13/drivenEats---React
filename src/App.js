
import Topo from "./Topo"
import Conteudo from "./Conteudo/Conteudo"
import Bottom from "./Bottom"
export default function () {
	

    return (
    <>
       <Topo empresa = "DrivenEats" subtitulo="Sua comida em 6 minutos" />
		<Conteudo />	
		<Bottom />

		<div className="resumo-pedido escondido">
			<p className="escrita-desabilitado"><strong>Confirmar seu Pedido</strong></p>
			<div className="lista-pedido">
				<div>
					<p>prato</p>
					<p>prato</p>
				</div>
				<div>
					<p>prato</p>
					<p>prato</p>
				</div>
				<div>
					<p>prato</p>
					<p>prato</p>
				</div>
				<div>
					<p><strong>prato</strong></p>
					<p><strong>prato</strong></p>
				</div>
			</div>

			<div className="final">
				<a href="#" className="tudo-certo" target="_blanck" onclick="enviarPedido()"><p>Certo, Pedir Agora!</p></a>
				<div className="botao-cancelar" onclick="cancelarPedido()"><p>Cancelar</p></div>				
			</div>
		</div>
		<div className="retangulo-transparente escondido"></div>
		
    </>
    )
}