import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import { Layout } from './components/layout/layout';
//import {Main} from '../main/main';

function App() {
  return (
    <Layout>
      <Header/>
      <main to='/'></main>
      <Footer/>     
    </Layout>
 );
}

export default App;
