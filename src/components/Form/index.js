import { useState } from 'react';
import Button from '../Button';
import DropDownList from '../DropDownList';
import TextContent from '../TextContent';
import './Form.css'

const Form = (props) => {


    const [nome , setNome] = useState("")
    const [funcao , setFuncao] = useState("")
    const [imagem , setImagem] = useState("")
    const [mapa , setMapa] = useState ("")

    const Save = (evento) =>{
        evento.preventDefault()
        props.playerCadastrado({
            nome,
            funcao,
            imagem,
            mapa
        })
        //reseta o preechimento do formulário
        setNome('')
        setFuncao('')
        setImagem ('')
        setMapa ('')
    }

    return (
        <section className='form'>
            <form onSubmit={Save}>
                <h2 className='titulo-form'>Preencha os dados para criar o seu card game</h2>
                <TextContent 
                    obrigatorio={true} 
                    label="Nome do Jogador" 
                    placeholder="Digite o nome" 
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <TextContent 
                    obrigatorio={true} 
                    label="Função" 
                    placeholder="Digite a Função - Ex.Duelista, Sentinela"
                    valor={funcao}
                    alterado={valor => setFuncao(valor)} 
                />
                <TextContent 
                    label="Icone" 
                    placeholder="Digite o endereço da sua imagem" 
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <DropDownList 
                    obrigatorio={true} 
                    label="Qual mapa deseja jogar" 
                    itens={props.times}
                    valor={mapa}
                    alterado={valor => setMapa(valor)}
                />
                <Button>Criar Card</Button>
            </form>


        </section>

    )

}

export default Form;