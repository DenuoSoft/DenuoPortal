import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import { Layout } from './components/layout/layout';
import { Main } from './components/main/main'
import { HR } from "./components/main/hr/hr";
import { Marketing } from "./components/main/marketing/marketing";
import { IT } from "./components/main/it/it";
import { Form } from "./components/main/form/form";
import { Phonebook } from "./components/main/phonebook/phonebook";
import { Routes, Route } from "react-router-dom"
//import {Main} from '../main/main';

export const App = () => {
  return (
    <Layout>
      <Header />
      
      <main>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/it" element={<IT />} />
            <Route path="/form" element={<Form />} />
            <Route path="/phonebook" element={<Phonebook />} />
          </Routes>
      </main>
      <Footer/>     
    </Layout>
 );
}

