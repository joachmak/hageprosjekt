import {Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {sizeContext} from "../App";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSeedling, faHammer, faPencilAlt} from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    const size = useContext(sizeContext)
    let styles = {
        container: {
            zIndex: 2,
            marginTop: -50,
            padding: "80px 0",
        },
        gridItem: {
            minHeight: 100,
            marginBottom: 25,
            height: "100%",
        },
        text: {
            maxWidth: size.lg ? "" : "80%",
            marginTop: 25,
        },
        heading: {
            marginBottom: 35,
            color: "#555",
        },
        icon: {
            height: 80,
            transform: "scale(5.5)",
            color: "rgb(130,200,130)",
        }
    }

    let cols = size.lg ? 6 : 4;
    let innercols = size.md ? 3 : 1;
    let rows = size.md ? 1 : 3;
    return (
        <>
            <div className="triangleDivTop" />
            <div className="positionRelative" style={styles.container}>
                <Heading align="center" style={styles.heading}>Noen av våre tjenester</Heading>
                <Grid templateColumns={'repeat(' + cols + ', 1fr)'} templateRows={'repeat(1, 1fr)'}
                      gap={3}>
                    {size.lg && <GridItem/>}
                    <GridItem className="positionRelative" colSpan={4}>
                        <Grid templateColumns={'repeat(' + innercols + ', 1fr)'}
                              templateRows={'repeat(' + rows + ', 1fr)'}
                              gap={10}>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <FontAwesomeIcon style={styles.icon} icon={faPencilAlt} />
                                    <Text align="justify" style={styles.text}>
                                        Planlegging av hager i både 2D og 3D, slik at våre kunder kan se og tilpasse sin
                                        drømmehage til egne ønsker og behov
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <FontAwesomeIcon style={styles.icon} icon={faSeedling} />
                                    <Text align="justify" style={styles.text}>
                                        Planting av busker, trær, plener og stauder, beskjæring av busker og hekker, og
                                        vanning av plen og planter
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <FontAwesomeIcon style={styles.icon} icon={faHammer} />
                                    <Text align="justify" style={styles.text}>
                                        Bygging av terasser, støttemurer, gjerder og trapper, og renovering av gamle
                                        hagekonstruksjoner
                                    </Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    {size.lg && <GridItem/>}
                </Grid>
            </div>
            <div className="triangleDivBottom" />
        </>
    )
}