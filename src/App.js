import { Provider } from "react-redux";
import store from './store'
import Wrapper from "./containers/Wrapper";
import Content from "./containers/Content";
import Navbar from "./containers/Navbar";
import Account from "./components/Account";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Flows from "./components/Flows";
import Terms from "./components/Terms";
import Tools from "./components/Tools";
import Rules from "./components/Rules";
import Application from "./components/Application";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

import "./sass/main.scss"


function App() {
  return (
    <ParallaxProvider>
      <Provider store={store}>
        <wc-toast></wc-toast>
        <Wrapper>
          <Navbar>
            <Account/>
            <Nav/>
          </Navbar>
          <Content>
            <Header/>
            <Flows/>
            <Terms/>
            <Tools/>
            <Rules/>
            <Application/>
            <Footer/>
          </Content>
        </Wrapper>
      </Provider>
    </ParallaxProvider>
  );
}

export default App;