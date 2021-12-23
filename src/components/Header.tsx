import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import {Text, Heading, Flex} from "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {sizeContext} from "../App";
import {useContext} from "react";

function CarouselImage(props: { url: string, title: string, label: string }) {
    const darknessOverlayIntensity = 0.4; // [0,1], reduce to lighten
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
            alignItems: "center",
            justifyContent: "center",
            width: "60vw",
            height: "75vh",
            fontSize: size.lg ? 20 : 16,
            margin: "auto",
        }
    }
    return (
        <div style={{
            backgroundImage: "linear-gradient( rgba(0, 0, 0, " + darknessOverlayIntensity + "), rgba(0, 0, 0, " + darknessOverlayIntensity + ") ), url('" + props.url + "')",
            ...styles.img,
        }}>
            <div style={styles.label}>
                <Flex flexDirection="column">
                    <Heading>{props.title}</Heading>
                    <Text>{props.label}</Text>
                </Flex>
            </div>
        </div>
    )
}

export default function Header() {
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
        }
    }

    const size = useContext(sizeContext)
    let imgUrls = [{
        url: "https://www.thespruce.com/thmb/TIUYmTRJ3NOFnY9LJ6FzMd_9oBc=/2571x1928/smart/filters:no_upscale()/small-garden-ideas-and-inspiration-4101842-01-5e0462c2365e42de86a4f3ebc2152c1b.jpg",
        title: "Tilbud",
        label: "Hageplanlegging i 2D og 3D, planting, bygging av gjerder, støttemurer, trapper, terasser og mer!"
    }, {
        url: "https://www.gardeningknowhow.com/wp-content/uploads/2007/03/flowers-1.jpg",
        title: "Privat og bedrift",
        label: "Hageprosjekt utfører hager både for privatpersoner og bedrifter, og har et tett samarbeid med kunden utover prosjektet."
    }, {
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/japanese-garden-ideas-1619540857.jpg?crop=1.00xw:0.707xh;0,0.0876xh&resize=1200:*",
        title: "Hageprosjekt",
        label: "Ditt ønske - vårt oppdrag"
    }]
    return (
        <div style={styles.container}>
            <Carousel showThumbs={false} showIndicators={false} showArrows={size.lg} showStatus={false} autoPlay
                      infiniteLoop interval={5000} emulateTouch useKeyboardArrows swipeable
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
                    imgUrls.map(image => <CarouselImage url={image.url} title={image.title} label={image.label}/>)
                }
            </Carousel>
        </div>
    )
}