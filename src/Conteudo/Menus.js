import React from 'react'
import Opcao from "./Opcao"

let itemEscolhido = false;
let bebidaEscolhida = false;
let sobremesaEscolhida = false;

export default function Menus (props) {

    const categoria = props.categoria;
    
    const [itens, setitens] = React.useState([])

   
   let linkWpp = ""
   let total = 0


    function pedidoSelecionado (categoria, titulo, preco) {

            let novoPrato = {
                titulo,
                preco,
                quantidade: 1
            }

            setitens(() => ([...itens, novoPrato]));
            itemEscolhido = true;
            mensagemWpp()

    }

    function aumentarQuantidade (categoria, titulo) {

       
            itens.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade++
                }

        })
        setitens(() => [...itens])
        mensagemWpp()
    }

    function diminuirQuantidade (categoria, titulo) {

            itens.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade-- 
                }

        })
        setitens(() => [...itens])
        mensagemWpp()
        
    }

    function calculaTotal () {
        
        itens.forEach((element) => {
            total += element.preco * element.quantidade
        })
        
        return total;
    }

    function mensagemWpp () {

        let msgPrato = ''
        itens.forEach((element) => {
            msgPrato += `${element.titulo}, quantidade: ${element.quantidade}x 
            `
        })
        total = calculaTotal()
        props.paraOPai(msgPrato, categoria, total)
        
    }
    mensagemWpp()
    return (
        <>
        <h2>{props.etapa}</h2>
        <div className="menus">
            {props.tipo.map((opcao, index) => (
                    <Opcao 
                    key = {index}
                    categoria = {categoria}
                    titulo = {opcao.titulo}
                    imagem = {opcao.imagem}
                    descricao = {opcao.descricao}
                    preco = {Number(opcao.preco).toFixed(2)}
                    pedidoSelecionado = {() => pedidoSelecionado(categoria, opcao.titulo, opcao.preco)}
                    itens = {itens}
                    aumentarQuantidade = {() => aumentarQuantidade(categoria, opcao.titulo)}
                    diminuirQuantidade = {() => diminuirQuantidade(categoria, opcao.titulo)}
                    /> 
            ))}
        </div>
        </>
    )
}