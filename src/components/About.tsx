import {Flex, Text, Heading, Box, Grid, GridItem} from "@chakra-ui/react"
import {useContext} from "react";
import {sizeContext} from "../App";

export default function About() {
    const darknessOverlayIntensity = 0.5
    const minHeight = 400
    const size = useContext(sizeContext)
    let styles = {
        container: {
            background: "linear-gradient( rgba(0, 0, 0, " + darknessOverlayIntensity + "), rgba(0, 0, 0, " + darknessOverlayIntensity + ") ), url('http://hageprosjekt.no/prosjekter/6/1.JPG')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            minHeight: minHeight,
            zIndex: 3,
            color: "white",
            padding: "140px 0"
        },
        flexContainer: {
            minHeight: minHeight,
            padding: 15,
        },
    }
    return (
        <>
            <div style={styles.container}>
                <Grid templateColumns={'repeat(6, 1fr)'} h={minHeight + "px"} gap={3}>
                    {size.lg && <GridItem />}
                    <GridItem colSpan={size.lg ? 4 : 6} >
                        <Flex style={styles.flexContainer} justify="center" align="center">
                            <Box>
                                <Heading align="center">Om bedriften</Heading>
                                <Text align="center">
                                    Hageprosjekt er en bedrift fra Gjøvik som utfører både hageplanlegging og
                                    hagearbeid. Vår prosjektleder har 5 års universitetsutdanning og mastergrad i prydplanter. Vi
                                    utarbeider forskjellige grøntprosjekter både for private kunder og bedrifter. Vi kan gi gode
                                    råd, er faglig dyktige, og vi vet at våre kunder ønsker et kvalitetsprodukt. Vi har vært en del
                                    av bransjen siden 2007, og har derfor svært mye praktisk erfaring, noe som er nødvendig for å
                                    oppnå et godt sluttprodukt.
                                </Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    {size.lg && <GridItem />}
                </Grid>
            </div>
        </>
    )
}