import Player from '../Player';
import './Time.css'

const Time = (props) => {


    return(
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='players'>
                {props.players.map(player => <Player nome={player.nome} funcao={player.funcao} imagem={player.imagem} />)}
            </div>
        </section>
    )

}

export default Time;