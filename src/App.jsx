import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './componentes/Saudacao'
import Rodape from './componentes/Rodape'
import Minipage from './componentes/Minipage'


function App() {

  return (
    <div className='carta'>
      <Rodape />

      <Minipage />
      <Saudacao />
    </div>
  )
}
export default App
