import './DropDownList.css'

const DropDownList = (props) =>{
    return (
        <div className='dropdownlist'>
            <label>{props.label}</label>   
            <select required={props.obrigatorio}>
                {props.itens.map(item => { 
                 return <option key={item}>{item}</option>})}
            </select>
        </div>

    )

}

export default DropDownList;