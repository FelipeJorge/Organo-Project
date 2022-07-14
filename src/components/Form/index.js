import Button from '../Button';
import DropDownList from '../DropDownList';
import TextContent from '../TextContent';
import './Form.css'

const Form = () => {

    const times = [
        'Acent',
        'Bind',
        'Breeze',
        'Fracture',
        'Pearl',
        'Split'

    ]

    const Save = (evento) =>{
        evento.preventDefault()
        console.log('Form esta ok')
    }

    return (
        <section className='form'>
            <form onSubmit={Save}>
                <h2 className='titulo-form'>Preencha os dados para criar o seu card game</h2>
                <TextContent obrigatorio={true} label="Nome do Jogador" placeholder="Digite o nome" />
                <TextContent obrigatorio={true} label="Função" placeholder="Digite a Função - Ex.Duelista, Sentinela" />
                <TextContent label="Icone" placeholder="Digite o endereço da sua imagem" />
                <DropDownList obrigatorio={true} label="Qual mapa deseja jogar" itens={times}/>
                <Button>Criar Card</Button>
            </form>


        </section>

    )

}

export default Form;