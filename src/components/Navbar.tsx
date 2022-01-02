import {Grid, GridItem, IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import {MutableRefObject, useContext, useEffect, useState} from "react";
import {sizeContext} from "../App";


interface navInterface {
    headerRef: MutableRefObject<any>;
    servicesRef: MutableRefObject<any>;
    aboutRef: MutableRefObject<any>;
    projectsRef: MutableRefObject<any>;
    contactRef: MutableRefObject<any>;
}

export default function Navbar(props: navInterface) {
    const size = useContext(sizeContext)
    const height = size.lg ? 100 : 80 // Height of navbar in px
    const sections = ["HEADER", "SERVICES", "ABOUT", "PROJECTS", "CONTACT"]
    const [currentSection, setCurrentSection] = useState(sections[0])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const contactPos = props.contactRef.current.offsetTop
            const servicesPos = props.servicesRef.current.offsetTop
            const aboutPos = props.aboutRef.current.offsetTop
            const projectsPos = props.projectsRef.current.offsetTop

            let pageOffset = window.pageYOffset
            let offset = 150
            if (pageOffset + offset > contactPos && currentSection !== sections[4]) {
                setCurrentSection(sections[4])
            } else if (pageOffset + offset > projectsPos && currentSection !== sections[3]) {
                setCurrentSection(sections[3])
            } else if (pageOffset + offset > aboutPos && currentSection !== sections[2]) {
                setCurrentSection(sections[2])
            } else if (pageOffset + offset > servicesPos && currentSection !== sections[1]) {
                setCurrentSection(sections[1])
            } else {
                setCurrentSection(sections[0])
            }
        });
    }, [])
    let cols = size.lg ? 6 : 2;
    let styles = {
        container: {
            backgroundColor: "#F8F9FA",
            boxShadow: "0 1px 5px rgba(0,0,0,0.3)",
            zIndex: 110,
        },
        img: {
            maxHeight: height - 10,
            margin: 5,
            marginLeft: size.lg ? 5 : 20,
        },
        menuItems: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: size.lg ? 0 : 20,
        },
        menuItem: {
            marginLeft: 25,
            fontSize: 16,
        },
        menuList: {
            width: 300,
        },
        menuButton: {
            transform: size.lg ? "scale(1.5)" : "",
            marginRight: 10,
            boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        }
    }
    return (
        <>
            <div style={{marginBottom: height}}/>
            <div className="navContainer" style={styles.container}>
                <Grid templateColumns={'repeat(' + cols + ', 1fr)'} h={height + "px"} gap={3}>
                    {size.lg && <GridItem/>}
                    <GridItem colSpan={size.lg ? 2 : 1}>
                        <img
                            className="navLogo"
                            onClick={() => props.headerRef.current.scrollIntoView({behavior: 'smooth'})}
                            style={styles.img} src={"/img/logo.png"} alt={"logo"}/>
                    </GridItem>
                    {size.lg ?
                        <GridItem style={styles.menuItems} colSpan={size.lg ? 2 : 1}>
                            <p
                                onClick={() => props.servicesRef.current.scrollIntoView({behavior: 'smooth'})}
                                className={"navLink" + (currentSection === sections[1] ? " navActive" : "") }
                                style={styles.menuItem}>
                                Tjenester
                            </p>
                            <p
                                onClick={() => props.aboutRef.current.scrollIntoView({behavior: 'smooth'})}
                                className={"navLink" + (currentSection === sections[2] ? " navActive" : "") }
                                style={styles.menuItem}>
                                Om oss
                            </p>
                            <p
                                onClick={() => props.projectsRef.current.scrollIntoView({behavior: 'smooth'})}
                                className={"navLink" + (currentSection === sections[3] ? " navActive" : "") }
                                style={styles.menuItem}>
                                Prosjekter
                            </p>
                            <p
                                onClick={() => props.contactRef.current.scrollIntoView({behavior: 'smooth'})}
                                className={"navLink" + (currentSection === sections[4] ? " navActive" : "") }
                                style={styles.menuItem}>
                                Kontakt oss
                            </p>
                        </GridItem>
                        :
                        <GridItem style={styles.menuItems} colSpan={size.lg ? 2 : 1}>
                            <Menu closeOnBlur={true} closeOnSelect={true}>
                                <MenuButton
                                    style={styles.menuButton}
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon/>}
                                    variant='outline'
                                />
                                <MenuList style={styles.menuList}>
                                    <MenuItem
                                        onClick={() => props.servicesRef.current.scrollIntoView({behavior: 'smooth'})}
                                    >Tjenester</MenuItem>
                                    <MenuItem
                                        onClick={() => props.aboutRef.current.scrollIntoView({behavior: 'smooth'})}
                                    >Om oss</MenuItem>
                                    <MenuItem
                                        onClick={() => props.projectsRef.current.scrollIntoView({behavior: 'smooth'})}
                                    >Prosjekter</MenuItem>
                                    <MenuItem
                                        onClick={() => props.contactRef.current.scrollIntoView({behavior: 'smooth'})}
                                    >Kontakt oss</MenuItem>
                                </MenuList>
                            </Menu>
                        </GridItem>
                    }

                    {size.lg && <GridItem/>}
                </Grid>
            </div>
        </>
    )
}