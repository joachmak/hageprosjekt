import {Grid, GridItem, Heading, Modal, ModalContent, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import {useContext} from "react";
import {sizeContext} from "../App";
import CarouselComponent from "./Carousel";

export default function Projects() {
    const size = useContext(sizeContext)
    // lg = 3, md = 2, sm = 1
    let cols = size.lg ? 3 : (size.md ? 2 : 1);
    let projects = [
        {
            title: "",
            images: [
                {url: "/img/projects/1/1.jpg"},
                {url: "/img/projects/1/2.jpg"},
                {url: "/img/projects/1/3.jpg"},
                {url: "/img/projects/1/4.jpg"},
                {url: "/img/projects/1/5.jpg"},
                {url: "/img/projects/1/6.jpg"},
                {url: "/img/projects/1/7.jpg"},
            ]
        },
        {
            title: "",
            images: [
                {url: "/img/projects/2/1.jpg"},
                {url: "/img/projects/2/2.jpg"},
                {url: "/img/projects/2/3.jpg"},
                {url: "/img/projects/2/4.jpg"},
                {url: "/img/projects/2/5.jpg"},
            ]
        },
        {
            title: "",
            images: [
                {url: "/img/projects/3/1.jpg"},
                {url: "/img/projects/3/2.jpg"},
                {url: "/img/projects/3/3.jpg"},
                {url: "/img/projects/3/4.jpg"},
                {url: "/img/projects/3/5.jpg"},
                {url: "/img/projects/3/6.jpg"},
                {url: "/img/projects/3/7.jpg"},
                {url: "/img/projects/3/8.jpg"},
                {url: "/img/projects/3/9.jpg"},
                {url: "/img/projects/3/10.jpg"},
                {url: "/img/projects/3/11.jpg"},
                {url: "/img/projects/3/12.jpg"},
                {url: "/img/projects/3/13.jpg"},
                {url: "/img/projects/3/14.jpg"},
                {url: "/img/projects/3/15.jpg"},
                {url: "/img/projects/3/16.jpg"},
                {url: "/img/projects/3/17.jpg"},
                {url: "/img/projects/3/18.jpg"},
                {url: "/img/projects/3/19.jpg"},
            ]
        },
        {
            title: "",
            images: [
                {url: "/img/projects/4/1.jpg"},
                {url: "/img/projects/4/2.jpg"},
                {url: "/img/projects/4/3.jpg"},
            ]
        },
        {
            title: "",
            images: [
                {url: "/img/projects/5/1.jpg"},
                {url: "/img/projects/5/2.jpg"},
                {url: "/img/projects/5/3.jpg"},
                {url: "/img/projects/5/4.jpg"},
                {url: "/img/projects/5/5.jpg"},
                {url: "/img/projects/5/6.jpg"},
                {url: "/img/projects/5/7.jpg"},
            ]
        },
        {
            title: "",
            images: [
                {url: "/img/projects/6/1.jpg"},
                {url: "/img/projects/6/2.jpg"},
                {url: "/img/projects/6/3.jpg"},
                {url: "/img/projects/6/4.jpg"},
                {url: "/img/projects/6/5.jpg"},
                {url: "/img/projects/6/6.jpg"},
                {url: "/img/projects/6/7.jpg"},
                {url: "/img/projects/6/8.jpg"},
                {url: "/img/projects/6/9.jpg"},
            ]
        },
        {
            title: "",
            images: [
                {url: "/img/projects/7/1.JPG"},
                {url: "/img/projects/7/2.JPG"},
                {url: "/img/projects/7/3.JPG"},
                {url: "/img/projects/7/4.JPG"},
                {url: "/img/projects/7/5.JPG"},
                {url: "/img/projects/7/6.JPG"},
                {url: "/img/projects/7/7.JPG"},
                {url: "/img/projects/7/8.JPG"},
                {url: "/img/projects/7/9.jpg"},
                {url: "/img/projects/7/10.jpg"},
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
                        {projects.map(project => <Project key={project.title} title={project.title ? project.title : undefined} images={project.images}/>)}
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
                    <Text>(Trykk for å se {props.images.length} bilder)</Text>
                </div>
            </GridItem>
        </>
    )
}