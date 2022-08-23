import Player from '../Player';
import './Time.css'

const Time = (props) => {


    return(
        (props.players.length > 0 ) ? // ternário
       <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='players'>
                {props.players.map(player => <Player corDeFundo={props.corPrimaria} key={player.funcao} nome={player.nome} funcao={player.funcao} imagem={player.imagem} />)}
            </div>
        </section>
        : '' // se nao satifazer a condição props, retona uma string vazia, mostrando no APP apenas times que possuem cards ativos
        )

}

export default Time;