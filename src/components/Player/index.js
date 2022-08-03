import './Player.css'

const Player = ({nome , imagem ,funcao}) => {
    return(
    <div className='player'>
        <div className='cabecalho'>
            <img  className='img' src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{funcao}r</h5>
        </div>
           
    </div>
    )
}

export default Player;