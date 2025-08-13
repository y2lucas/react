import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './componentes/Saudacao'
import Rodape from './componentes/Rodape'
import Minipage from './componentes/Minipage'
import Alerta from './componentes/Alerta'
import Emailinput from './componentes/Emailinput'
import Passwordinput from './componentes/Passwordinput'
import LoginButton from './componentes/LoginButton'
// import Fundo from './componentes/Fundo'



function App() {

  return (
    <div className='carta'>

      <Emailinput /> <br />
      <Passwordinput /> <br />
      <LoginButton/>

    </div>
  )
}
export default App
