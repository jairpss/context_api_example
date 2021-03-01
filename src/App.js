import React, {useContext} from 'react';
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Post from './components/Post';
import Error404 from './components/Error404';
import {ContextoTema} from './contextos/contextoTema';

const App = () => {
  const {tema} = useContext(ContextoTema);

  return ( 
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main tema={tema}>
          <Switch>
            <Route path='/' exact={true}> <Home /> </Route>
            <Route path='/blog'> <Blog /> </Route>
            <Route path='/post/:id'> <Post /> </Route>
            <Route path='/about'> <About /> </Route>
            <Route component={Error404} />
          </Switch>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
   );
}

const ContenedorPrincipal = styled.div`
    padding: 40px;
    width: 90%;
    max-width: 700px;
`;

const Main = styled.main`
    font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
    text-align: ${props => props.tema ? props.tema.alineado : 'right'};
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;