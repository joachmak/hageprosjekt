import {Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {sizeContext} from "../App";


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
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        style={styles.icon}
                                    >
                                        <line x1="18" y1="2" x2="22" y2="6" />
                                        <path d="M7.5 20.5L19 9l-4-4L3.5 16.5 2 22l5.5-1.5z" />
                                    </svg>
                                    <Text align="center" style={styles.text}>
                                        Planlegging av hager i både 2D og 3D, slik at våre kunder kan se og tilpasse sin
                                        drømmehage til egne ønsker og behov
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        stroke="white"
                                        stroke-width="1"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        style={styles.icon}
                                    >
                                        <g>
                                            <path fill="none" d="M0 0H24V24H0z"/>
                                            <path d="M6 3c3.49 0 6.383 2.554 6.913 5.895C14.088 7.724 15.71 7 17.5 7H22v2.5c0 3.59-2.91 6.5-6.5 6.5H13v5h-2v-8H9c-3.866 0-7-3.134-7-7V3h4zm14 6h-2.5c-2.485 0-4.5 2.015-4.5 4.5v.5h2.5c2.485 0 4.5-2.015 4.5-4.5V9zM6 5H4v1c0 2.761 2.239 5 5 5h2v-1c0-2.761-2.239-5-5-5z"/>
                                        </g>
                                    </svg>
                                    <Text align="center" style={styles.text}>
                                        Planting av busker, trær, plener og stauder, beskjæring av busker og hekker, og
                                        vanning av plen og planter
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem style={styles.gridItem}>
                                <Flex flexDirection="column" align="center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        style={styles.icon}
                                    >
                                        <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9" />
                                        <path d="M17.64 15L22 10.64" />
                                        <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91" />
                                    </svg>
                                    <Text align="center" style={styles.text}>
                                        Bygging av terasser, støttemurer, gjerder <br />og trapper, og renovering av gamle
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