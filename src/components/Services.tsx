import {Flex, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {sizeContext} from "../App";
import hammer from "../img/hammer.png";
import plant from "../img/plant.png";
import pencil from "../img/pencil.png";

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
        }
    }

    let iconsize = 80;
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
                              gap={5}>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <Image boxSize={iconsize + "px"} src={pencil} alt='pencil icon'/>
                                    <Text align="center" style={styles.text}>
                                        Planlegging av hager i både 2D og 3D, slik at våre kunder kan se og tilpasse sin
                                        drømmehage til egne ønsker og behov
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <Image boxSize={iconsize + "px"} src={plant} alt='plant icon'/>
                                    <Text align="center" style={styles.text}>
                                        Planting av busker, trær, plener og stauder, beskjæring av busker og hekker, og
                                        vanning av plen og planter
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <Image boxSize={iconsize + "px"} src={hammer} alt='hammer icon'/>
                                    <Text align="center" style={styles.text}>
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