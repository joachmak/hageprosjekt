import {Grid, GridItem, Heading, Modal, ModalContent, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";
import {sizeContext} from "../App";
import CarouselComponent from "./Carousel";
import sanityClient from "../client";

export default function Projects() {
    const size = useContext(sizeContext)
    // lg = 3, md = 2, sm = 1
    let cols = size.lg ? 3 : (size.md ? 2 : 1);
    const [projects, setProjects] = useState([])
    useEffect(() => {
        sanityClient.fetch("*[_type == 'prosjekt']{'title': '', 'images': prosjektsett[]{'url': asset->url}}").then((d) => {
            // @ts-ignore
            setProjects(d)
        })
    }, [])
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
    if (projects.length === 0) return (<></>)
    return (
        <>
            <div className="triangleDivTop"/>
            <Heading style={styles.heading} align="center">
                Utvalgte prosjekter
            </Heading>
            <Grid style={styles.parentGrid} templateColumns={'repeat(' + (size.lg ? 6 : 4) + ', 1fr)'} gap={3}>
                {size.lg && <GridItem/>}
                <GridItem colSpan={4}>
                    <Grid templateColumns={'repeat(' + cols + ', 1fr)'}
                          templateRows={'repeat(' + rows + ', ' + rowHeight + 'px)'} gap={2}>
                        {projects.map(project => <Project key={project["images"][0]["url"]} title={project["title"] ? project["title"] : undefined} images={project["images"]}/>)}
                    </Grid>
                </GridItem>
                {size.lg && <GridItem/>}
            </Grid>
        </>
    )
}

interface projectInterface {
    title?: string;
    images: { url: string, label?: string }[]
}

function Project(props: projectInterface) {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
        <>
            <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size={"xl"}>
                <ModalOverlay />
                <ModalContent maxW="80vw">
                    <CarouselComponent imgUrls={props.images} projectView={true} />
                </ModalContent>
            </Modal>
            <GridItem className="positionRelative projectOverlay" style={styles.container} background="gray.200"
                      onClick={onOpen}>
                {/* @ts-ignore */}
                <div className="positionAbsolute" style={styles.overlay}>
                    {props.title && <Heading>{props.title}</Heading>}
                    <Text>(Trykk for å se {props.images.length} bilde{props.images.length > 1 ? "r" : ""})</Text>
                </div>
            </GridItem>
        </>
    )
}
