

export default function Opcao ({key, categoria, titulo, imagem, descricao, preco, pratosSelecionados, aumentarQuantidade,diminuirQuantidade, pedidoSelecionado, itens}) {

    let quantidade = 0;
    
        itens.forEach(element => {
            if(element.titulo === titulo) {
                quantidade = element.quantidade
            }
            
        });
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