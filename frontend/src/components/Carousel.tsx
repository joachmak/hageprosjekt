import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useContext} from "react";
import {sizeContext} from "../App";
import {Flex, Heading, Text} from "@chakra-ui/react";

interface carouselInterface {
    imgUrls: {
        url: string,
        title?: string,
        label?: string,
    }[];
    projectView: boolean;
}

function CarouselImage(props: { url: string, title?: string, label?: string, projectView: boolean }) {
    const darknessOverlayIntensity = props.projectView ? 0 : 0.4; // [0,1], reduce to lighten
    const size = useContext(sizeContext)
    let styles = {
        img: {
            minHeight: "80vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
        },
        label: {
            color: "white",
            display: "flex",
            alignItems: props.projectView ? "flex-end" : "center",
            justifyContent: "center",
            width: "60vw",
            height: "75vh",
            fontSize: size.lg ? 20 : 16,
            margin: "auto",
        },
        text: {
            backgroundColor: "rgba(30,30,30,0.85)",
            padding: 20,
            borderRadius: 5,
        },
        imgElement: {
            maxWidth: "80vw",
        },
        imgContainer: {
            backgroundColor: "rgba(0,0,0,0.9)",
            height: "80vh",
        }
    }
    console.log(props.url)
    return (
        <>
            {props.projectView ?
                <>
                    <Flex justifyContent="center" alignItems="center" style={styles.imgContainer}>
                        <img
                            src={props.url}
                            style={styles.imgElement}
                            alt="Prosjektbilde"
                        />
                    </Flex>
                </>
                :
                <div style={{
                    backgroundImage: "linear-gradient( rgba(0, 0, 0, " + darknessOverlayIntensity + "), rgba(0, 0, 0, " + darknessOverlayIntensity + ") ), url('" + props.url + "')",
                    ...styles.img,
                }}>
                    <div style={styles.label}>
                        <Flex flexDirection="column">
                            {props.title && <Heading>{props.title}</Heading>}
                            {props.label && <Text style={props.projectView ? styles.text : {}}>{props.label}</Text>}
                        </Flex>
                    </div>
                </div>
            }
        </>
    )
}

export default function CarouselComponent(props: carouselInterface) {
    const size = useContext(sizeContext)
    let styles = {
        container: {},
        arrowStyles: {
            position: 'absolute',
            zIndex: 2,
            top: 'calc(50% - 40px)',
            width: 50,
            height: 50,
            cursor: 'pointer',
            color: "white",
            borderRadius: "100%",
            margin: "0 35px",
            backgroundColor: props.projectView ? "rgba(30,30,30,0.6)" : "",
        }
    }

    return (
        <Carousel showThumbs={false} showIndicators={props.projectView} showArrows={size.lg} showStatus={false} autoPlay
                  infiniteLoop interval={5000} emulateTouch useKeyboardArrows swipeable stopOnHover={false}
                  renderArrowNext={
                      (onClickHandler, hasNext, label) =>
                          hasNext && (
                              <button className="carouselArrows" type="button" onClick={onClickHandler} title={label}
                                  /* @ts-ignore */
                                      style={{...styles.arrowStyles, right: 15}}>
                                  <ArrowRightIcon/>
                              </button>
                          )
                  }
                  renderArrowPrev={
                      (onClickHandler, hasNext, label) =>
                          hasNext && (
                              <button className="carouselArrows" type="button" onClick={onClickHandler} title={label}
                                  /* @ts-ignore */
                                      style={{...styles.arrowStyles, left: 15}}>
                                  <ArrowLeftIcon/>
                              </button>
                          )
                  }
        >
            {
                props.imgUrls.map(image => <CarouselImage key={image.url} url={image.url} title={image.title ? image.title : ""}
                                                          label={image.label ? image.label : undefined} projectView={props.projectView}/>)
            }
        </Carousel>
    )
}