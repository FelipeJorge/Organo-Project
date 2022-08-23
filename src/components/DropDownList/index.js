import './DropDownList.css'

const DropDownList = (props) =>{
    return (
        <div className='dropdownlist'>
            <label>{props.label}</label>   
            <select onChange={evento => props.alterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value=""> </option>
                {props.itens.map(item => { 
                 return <option key={item}>{item}</option>})}
            </select>
        </div>

    )

}

export default DropDownList;