import React from 'react'
import Opcao from "./Opcao"


export default function Menus (props) {

    const categoria = props.categoria;
    
    const [pratosSelecionados, setPratosSelecionados] = React.useState([])

    function pedidoSelecionado (categoria, titulo, preco) {

        if(categoria === "pratos") {

            let novoPrato = {
                titulo,
                preco
            }
            const pratosAtt = [...pratosSelecionados, novoPrato];
            setPratosSelecionados(() => pratosAtt);
            console.log(pratosSelecionados)
        }
        if(categoria === "bebidas") {
            
        }
        if(categoria === "sobremesas") {
            
        }

    }

    return (
        <>
        <h2>{props.etapa}</h2>
        <div className="menus">
            {props.tipo.map((opcao, index) => (
                <div onClick={() => (pedidoSelecionado(categoria, opcao.titulo, opcao.preco))} className="">
                    <Opcao 
                    key = {index}
                    titulo = {opcao.titulo}
                    imagem = {opcao.imagem}
                    descricao = {opcao.descricao}
                    preco = {Number(opcao.preco).toFixed(2)}
                    />
                </div>    
            ))}
        </div>
        </>
    )
}