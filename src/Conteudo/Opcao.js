

export default function Opcao ({key, categoria, titulo, imagem, descricao, preco, pratosSelecionados, aumentarQuantidade,diminuirQuantidade, pedidoSelecionado, bebidasSelecionadas, sobremesasSelecionadas}) {

    let quantidade = 0;
    if(categoria === "pratos"){
        pratosSelecionados.forEach(element => {
            if(element.titulo === titulo) {
                quantidade = element.quantidade
            }
            
        });
    }
    if(categoria === "bebidas"){
        bebidasSelecionadas.forEach(element => {
            if(element.titulo === titulo) {
                quantidade = element.quantidade
            }
            
        });
    }
    if(categoria === "sobremesas"){
        sobremesasSelecionadas.forEach(element => {
            if(element.titulo === titulo) {
                quantidade = element.quantidade
            }
            
        });
    }
    if(quantidade>0) { 

         return(
         <div className="card green" >
             <img className="imagem-cardapio" src={imagem} />
             <p className="titulo-card">{titulo}</p>
             <p className="descricao"> {descricao}</p>
             <div className="card-bottom">
                 <p className="preco-card">R$ <span>{preco}</span></p>
                 <div className = "add-quantidade">
                     <button onClick={() => aumentarQuantidade(categoria, titulo)}>+</button>
                     <p>{quantidade}</p>
                     <button onClick={() => diminuirQuantidade(categoria, titulo)}>-</button>
                 </div>
             </div>
         </div>
         )
        


     }
    return (

       
       <div className="card" onClick={() => (pedidoSelecionado(categoria, titulo, preco))} >
            <img className="imagem-cardapio" src={imagem} />
            <p className="titulo-card">{titulo}</p>
            <p className="descricao"> {descricao}</p>
            <div className="card-bottom">
                <p className="preco-card">R$ <span>{preco}</span></p>
                
            </div>
        </div>

    )
}