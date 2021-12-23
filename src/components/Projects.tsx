import {Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {sizeContext} from "../App";

export default function Projects() {
    const size = useContext(sizeContext)
    // lg = 3, md = 2, sm = 1
    let cols = size.lg ? 3 : (size.md ? 2 : 1);
    let projects = [
        {
            title: "Prosjekt 1",
            images: [
                {
                    url: "http://hageprosjekt.no/prosjekter/1/1.JPG",
                    label: "Bilde av ett eller annet"
                },
                {
                    url: "http://hageprosjekt.no/prosjekter/1/2.JPG",
                    label: "Bilde av hagen fra steintrapp"
                },
                {
                    url: "http://hageprosjekt.no/prosjekter/1/3.JPG",
                    label: "Steintrapp"
                }
            ]
        },
        {
            title: "Prosjekt 2",
            images: [
                {
                    url: "http://hageprosjekt.no/prosjekter/6/1.JPG",
                    label: "Bilde av ett eller annet"
                },
                {
                    url: "http://hageprosjekt.no/prosjekter/1/2.JPG",
                    label: "Bilde av hagen fra steintrapp"
                },
                {
                    url: "http://hageprosjekt.no/prosjekter/1/3.JPG",
                    label: "Steintrapp"
                }
            ]
        },
        {
            title: "Prosjekt 3",
            images: [
                {
                    url: "http://hageprosjekt.no/prosjekter/4/3.JPG",
                    label: "Bilde av ett eller annet"
                },
                {
                    url: "http://hageprosjekt.no/prosjekter/1/2.JPG",
                    label: "Bilde av hagen fra steintrapp"
                },
                {
                    url: "http://hageprosjekt.no/prosjekter/1/3.JPG",
                    label: "Steintrapp"
                }
            ]
        },
    ]
    let rows = Math.ceil(projects.length / cols)
    let rowHeight = 200
    let styles = {
        heading: {
            marginBottom: 35,
            color: "#555",
        },
        parentGrid: {
            marginBottom: 50,
            padding: "0 10px",
        }
    }
    return (
        <>
            <div className="triangleDivTop"/>
            <Heading style={styles.heading} align="center">
                Prosjekter
            </Heading>
            <Grid style={styles.parentGrid} templateColumns={'repeat(' + (size.lg ? 6 : 4) + ', 1fr)'} gap={3}>
                {size.lg && <GridItem/>}
                <GridItem colSpan={4}>
                    <Grid templateColumns={'repeat(' + cols + ', 1fr)'}
                          templateRows={'repeat(' + rows + ', ' + rowHeight + 'px)'} gap={2}>
                        {projects.map(project => <Project title={project.title} images={project.images}/>)}
                    </Grid>
                </GridItem>
                {size.lg && <GridItem/>}
            </Grid>
        </>
    )
}

interface projectInterface {
    title: string;
    images: { url: string, label: string }[]
}

function Project(props: projectInterface) {
    const onProjectClick = () => {
        console.log("Clicked!")
    }
    let styles = {
        container: {
            cursor: "pointer",
            backgroundImage: "url(" + props.images[0].url + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        overlay: {
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }
    }
    return (
        <GridItem className="positionRelative projectOverlay" style={styles.container} background="gray.200"
                  onClick={() => onProjectClick()}>
            {/* @ts-ignore */}
            <div className="positionAbsolute" style={styles.overlay}>
                <Heading>{props.title}</Heading>
                <Text>(Trykk for å se flere bilder)</Text>
            </div>
        </GridItem>
    )
}