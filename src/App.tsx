import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {useMediaQuery} from '@chakra-ui/react';
import {createContext} from "react";

const sizeContext = createContext({xl: false, lg: false, md: false, sm: false})

function App() {
    const [xl, lg, md, sm] = useMediaQuery([
        '(min-width: 1920px)',
        '(min-width: 1250px)',
        '(min-width: 768px)',
        '(min-width: 480px)',
    ])
    return (
        <div className="App">
            <sizeContext.Provider value={{xl: xl, lg: lg, md: md, sm: sm}}>
                <Navbar/>
                <Header/>
                <Services/>
                <About/>
                <Projects/>
                <Contact/>
            </sizeContext.Provider>
        </div>
    );
}

export default App;
export {sizeContext};
