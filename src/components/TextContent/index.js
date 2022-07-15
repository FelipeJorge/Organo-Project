
import "./TextContent.css"

const TextContent = (props) => {

    const digitado = (evento) => {
        props.alterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitado} required={props.obrigatorio} placeholder={props.placeholder}/>           
        </div>
    )
}

export default TextContent ;