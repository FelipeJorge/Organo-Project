
import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times =[
    {
      nome:'Ascent',
      corSecundaria:'#D9F7E9',
      corPrimaria:'#57C278'
    },
    {
      nome:'Bind',
      corSecundaria:'#E8F8FF',
      corPrimaria:'#82CFFA'
    },
    {
      nome:'Breeze',
      corSecundaria:'#F0F8E2',
      corPrimaria:'#A6D157'
    },
    {
      nome:'Fracture',
      corSecundaria:'#FDE7E8',
      corPrimaria:'#E06B69'
    },
    {
      nome:'Haven',
      corSecundaria:'#FAE9F5',
      corPrimaria:'#DB6EBF'
    },
    {
      nome:'Icebox',
      corSecundaria:'#FFF5D9',
      corPrimaria:'#FFBA05'
    },
    {
      nome:'Split',
      corSecundaria:'#FFEEDF',
      corPrimaria:'#FF8A29'
    }
  ]

  const [players,setPlayers] = useState([])

  const newPlayer = (player)=>{
    console.log(player);
    setPlayers([...players, player])
  }
  return (
    <div className="App">
      <Banner />
      <Form times = {times.map(time => time.nome)} playerCadastrado={player => newPlayer(player)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria ={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
