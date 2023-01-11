import {useState, ChangeEvent} from 'react'

const App = () => {

  const [state, setState] = useState({
    name: '',
    lastName: '',
    age: 0
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) =>{
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" name='name' value={state.name} onChange={handleChangeInput}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" name='lastName' value={state.lastName} onChange={handleChangeInput}/>
      </div>

      <div>
        Idade:
        <input type="text" value={state.age} 
        onChange={(e)=>setState(
          {...state, age: parseInt(e.target.value)}
        )}/>
      </div>

      <hr/>

      Olá {`${state.name} ${state.lastName}`}, tudo bem?<br/>
      Você tem {state.age} anos.
    </div>
  );
}
export default App;