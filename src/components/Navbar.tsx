import { Grid, GridItem, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import {useContext} from "react";
import { sizeContext } from "../App";
import logo from "../img/logo.png";


export default function Navbar() {
    const size = useContext(sizeContext)
    const height = size.lg ? 70 : 60 // Height of navbar in px
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
            fontSize: 12,
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
            <div style={{marginBottom: height}} />
            <div className="navContainer" style={styles.container}>
                <Grid templateColumns={'repeat(' + cols + ', 1fr)'} h={height + "px"} gap={3}>
                    {size.lg && <GridItem />}
                    <GridItem colSpan={size.lg ? 2 : 1}>
                        <img style={styles.img} src={logo} alt={"logo"} />
                    </GridItem>
                    {size.lg ?
                        <GridItem style={styles.menuItems} colSpan={size.lg ? 2 : 1} >
                            <a href="#" className="navLink" style={styles.menuItem}>Tjenester</a>
                            <a href="#" className="navLink" style={styles.menuItem}>Om oss</a>
                            <a href="#" className="navLink" style={styles.menuItem}>Prosjekter</a>
                            <a href="#" className="navLink" style={styles.menuItem}>Kontakt oss</a>
                        </GridItem>
                    :
                        <GridItem style={styles.menuItems} colSpan={size.lg ? 2 : 1} >
                            <Menu closeOnBlur={true} closeOnSelect={true}>
                                <MenuButton
                                    style={styles.menuButton}
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList style={styles.menuList}>
                                    <MenuItem>Tjenester</MenuItem>
                                    <MenuItem>Om oss</MenuItem>
                                    <MenuItem>Prosjekter</MenuItem>
                                    <MenuItem>Kontakt oss</MenuItem>
                                </MenuList>
                            </Menu>
                        </GridItem>
                    }

                    {size.lg && <GridItem />}
                </Grid>
            </div>
        </>
    )
}