import {Flex, Text, Heading, Box, Grid, GridItem} from "@chakra-ui/react"
import {useContext, useEffect, useState} from "react";
import {sizeContext} from "../App";
import sanityClient from "../client";

export default function About() {
    const darknessOverlayIntensity = 0.5
    const minHeight = 400
    const size = useContext(sizeContext)
    const [bgImageUrl, setBgImageUrl] = useState("")
    useEffect(() => {
        sanityClient.fetch("*[_type == 'om-bilde']{bilde{'url': asset->url}}").then((d) => {
            setBgImageUrl(d[0]["bilde"]["url"])
        })
    }, [])
    let styles = {
        container: {
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: minHeight,
            zIndex: 3,
            color: "white",
            padding: "140px 0",
            backgroundImage: "linear-gradient( rgba(0, 0, 0, " + darknessOverlayIntensity + "), rgba(0, 0, 0, " + darknessOverlayIntensity + ") ), url('" + bgImageUrl + "')",
        },
        flexContainer: {
            minHeight: minHeight,
            padding: 15,
        },
    }
    return (
        <>
            <div style={styles.container}>
                <Grid templateColumns={'repeat(6, 1fr)'} gap={3}>
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
