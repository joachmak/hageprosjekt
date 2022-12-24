import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {useMediaQuery} from '@chakra-ui/react';
import {createContext, useRef} from "react";
import Snowflakes from "./components/Snowflakes";
import {HashRouter as Router, Switch, Route, RouteProps} from "react-router-dom";


const sizeContext = createContext({xl: false, lg: false, md: false, sm: false})


interface AuthRouteProps extends RouteProps {
    redirect?: string
}

function UnAuthenticatedRoute({ children, redirect = "/", ...rest }: AuthRouteProps) {
    return (
        <Route {...rest}>
            {children}
        </Route>
    )
}

function App() {
    const [xl, lg, md, sm] = useMediaQuery([
        '(min-width: 1920px)',
        '(min-width: 1250px)',
        '(min-width: 768px)',
        '(min-width: 480px)',
    ])
    // Section refs
    const headerRef = useRef(null)
    const servicesRef = useRef(null)
    const aboutRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    return (
        <div className="App">
            <sizeContext.Provider value={{xl: xl, lg: lg, md: md, sm: sm}}>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                    <UnAuthenticatedRoute path={"/"}>
                        <Snowflakes />
                        <Navbar headerRef={headerRef} servicesRef={servicesRef} contactRef={contactRef} aboutRef={aboutRef} projectsRef={projectsRef} />
                        <div ref={headerRef}>
                            <Header/>
                        </div>
                        <div ref={servicesRef}>
                            <Services/>
                        </div>
                        <div ref={aboutRef}>
                            <About/>
                        </div>
                        <div ref={projectsRef}>
                            <Projects/>
                        </div>
                        <div ref={contactRef}>
                            <Contact/>
                        </div>
                    </UnAuthenticatedRoute>
                    </Switch>
                </Router>
            </sizeContext.Provider>
        </div>
    );
}

export default App;
export {sizeContext};
