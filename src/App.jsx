import Header from './componentes/Header'
import './App.css'
import Lineheader from './componentes/Lineheader'
import Grid from './componentes/Grid'
import Textavi from './Textavi'
import TextComunidade from './TextComunidade'
import GridComunidade from './componentes/GridComunidade'
function App() {

  return (
    <article>
      <Header />
      <Lineheader />
      <Textavi />
      <Grid />
      <TextComunidade />
      <GridComunidade />
    </article>
  )
}
export default App