import React from 'react'
import Opcao from "./Opcao"

let pratoEscolhido = false;
let bebidaEscolhida = false;
let sobremesaEscolhida = false;

export default function Menus (props) {

    const categoria = props.categoria;
    
    const [pratosSelecionados, setPratosSelecionados] = React.useState([])

    const [bebidasSelecionadas, setBebidasSelecionadas] = React.useState([])

    const [sobremesasSelecionadas, setSobremesasSelecionadas] = React.useState([])

   let linkWpp = ""
   let total = 0


    function pedidoSelecionado (categoria, titulo, preco) {

        if(categoria === "pratos") {
            let novoPrato = {
                titulo,
                preco,
                quantidade: 1
            }

            
            setPratosSelecionados(() => ([...pratosSelecionados, novoPrato]));
            console.log(pratosSelecionados)
            pratoEscolhido = true;
            

        }
        if(categoria === "bebidas") {
            let novaBebida = {
                titulo,
                preco,
                quantidade: 1
            }
            
            setBebidasSelecionadas(() => ([...bebidasSelecionadas, novaBebida]));
            console.log(bebidasSelecionadas)
            bebidaEscolhida = true

            
        }
        if(categoria === "sobremesas") {
            let novaSobremesa = {
                titulo,
                preco,
                quantidade: 1
            }
            sobremesaEscolhida = true
            setSobremesasSelecionadas(() => ([...sobremesasSelecionadas, novaSobremesa]));
            console.log(sobremesasSelecionadas)
            

        }
        console.log(pratoEscolhido)
        if(pratoEscolhido  && bebidaEscolhida && sobremesaEscolhida) {
            console.log("OKKKKKKKKKKKKKKKKKKKk")

            
        }

    }

    function aumentarQuantidade (categoria, titulo) {

        if(categoria === "pratos") {
            pratosSelecionados.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade++
                }

        })
        setPratosSelecionados(() => [...pratosSelecionados])
        console.log(pratosSelecionados)
        }

        if(categoria === "bebidas") {
            bebidasSelecionadas.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade++
                }

        })
        setBebidasSelecionadas(() => ([...bebidasSelecionadas]));
        console.log(bebidasSelecionadas)
        }

        if(categoria === "sobremesas") {
            sobremesasSelecionadas.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade++
                }

        })
        setSobremesasSelecionadas(() => ([...sobremesasSelecionadas]));
        console.log(sobremesasSelecionadas)

        }
        console.log("AAAAA")
        
    }

    function diminuirQuantidade (categoria, titulo) {

        if(categoria === "pratos") {
            pratosSelecionados.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade-- 
                }

        })
        setPratosSelecionados(() => [...pratosSelecionados])
        console.log(pratosSelecionados)
        }

        if(categoria === "bebidas") {
            bebidasSelecionadas.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade--
                }

        })
        setBebidasSelecionadas(() => ([...bebidasSelecionadas]));
        console.log(bebidasSelecionadas)
        }

        if(categoria === "sobremesas") {
            sobremesasSelecionadas.forEach(element => {
                if(element.titulo === titulo) {
                    element.quantidade--
                }

        })
        setSobremesasSelecionadas(() => ([...sobremesasSelecionadas]));
        console.log(sobremesasSelecionadas)

        }
        
    }

    function calculaTotal () {
        
        if(categoria === "pratos") {
        
        pratosSelecionados.forEach((element) => {
            total += element.preco
        })
        }

        if(categoria === "bebidas") {
        bebidasSelecionadas.forEach((element) => {
            total += element.preco
        })
        }
        if(categoria === "sobremesas") {
        sobremesasSelecionadas.forEach((element) => {
            total += element.preco
        })
        }
        return total;
    }

    function mensagemWpp () {

        let msgPrato = ''
        pratosSelecionados.forEach((element) => {
            msgPrato += `
            ${element.titulo}, quantidade: ${element.quantidade}x 
            `
        })

        let msgBebida = ''
        bebidasSelecionadas.forEach((element) => {
            msgBebida += `
            ${element.titulo}, quantidade: ${element.quantidade}x 
            `
        })

        let msgSobremesa = ''
        sobremesasSelecionadas.forEach((element) => {
            msgSobremesa += `
            ${element.titulo}, quantidade: ${element.quantidade}x 
            `
        })

        let mensagem = `a Olá, gostaria de fazer o pedido:
        - Prato: ${msgPrato}
        - Bebida: ${msgBebida}
        - Sobremesa: ${msgSobremesa}
        Total: R$ ${calculaTotal().toFixed(2)}`
        console.log(mensagem);
        props.paraOPai(mensagem)
        let msgWpp = encodeURIComponent(mensagem);
        linkWpp = "https://wa.me/5521979778806?text=" + msgWpp;
    }
    mensagemWpp()
    console.log(linkWpp)
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
                    pratosSelecionados = {pratosSelecionados}
                    aumentarQuantidade = {() => aumentarQuantidade(categoria, opcao.titulo)}
                    diminuirQuantidade = {() => diminuirQuantidade(categoria, opcao.titulo)}
                    bebidasSelecionadas = {bebidasSelecionadas}
                    sobremesasSelecionadas = {sobremesasSelecionadas}
                    /> 
            ))}
        </div>
        </>
    )
}