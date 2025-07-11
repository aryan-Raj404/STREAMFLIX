import Body from './components/Body';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import MovieDialogue from './components/MovieDialogue';


function App(){

  return (
    <>
      <Header />
      <Body/>
      <Toaster />
      <MovieDialogue />
    </>
  )
}

export default App
