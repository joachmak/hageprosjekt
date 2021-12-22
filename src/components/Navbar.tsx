import { Grid, GridItem, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import {useContext} from "react";
import { sizeContext } from "../App";
import logo from "../img/logo.png";


export default function Navbar() {
    const size = useContext(sizeContext)
    let cols = size.lg ? 6 : 2;
    let styles = {
        container: {
            backgroundColor: "#F8F9FA",
            boxShadow: "0 1px 5px rgba(0,0,0,0.3)",
        },
        img: {
            maxHeight: "90px",
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
            fontSize: 18,
        },
        menuList: {
            width: 300,
        },
        menuButton: {
            transform: "scale(1.5)",
            marginRight: 10,
            boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        }
    }
    return (
        <div className="navContainer" style={styles.container}>
            <Grid templateColumns={'repeat(' + cols + ', 1fr)'} h="100px" gap={3}>
                {size.lg && <GridItem />}

                <GridItem colSpan={size.lg ? 2 : 1}>
                    <img style={styles.img} src={logo} alt={"logo"} />
                </GridItem>
                {size.lg ?
                    <GridItem style={styles.menuItems} colSpan={size.lg ? 2 : 1} >
                        <Link style={styles.menuItem}>Tjenester</Link>
                        <Link style={styles.menuItem}>Om oss</Link>
                        <Link style={styles.menuItem}>Prosjekter</Link>
                        <Link style={styles.menuItem}>Kontakt oss</Link>
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
    )
}