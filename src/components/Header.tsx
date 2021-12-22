import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sizeContext } from "../App";
import {useContext} from "react";

function CarouselImage(props: { url: string, label: string }) {
    const darknessOverlayIntensity = 0.4; // [0,1], reduce to lighten
    let styles = {
        img: {
            minHeight: "80vh",
            zIndex: 0,
            backgroundSize: "cover",
        },
        label: {
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            fontSize: 24,
        }
    }
    return (
        <div style={{
            backgroundImage: "linear-gradient( rgba(0, 0, 0, " + darknessOverlayIntensity + "), rgba(0, 0, 0, " + darknessOverlayIntensity + ") ), url('" + props.url + "')",
            ...styles.img,
        }}>
            <div style={styles.label}>
                <Text>{props.label}</Text>
            </div>
        </div>
    )
}

export default function Header() {
    let styles = {
        container: {

        },
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
    let imgUrls = [{url: "https://www.thespruce.com/thmb/TIUYmTRJ3NOFnY9LJ6FzMd_9oBc=/2571x1928/smart/filters:no_upscale()/small-garden-ideas-and-inspiration-4101842-01-5e0462c2365e42de86a4f3ebc2152c1b.jpg", label: "Image 1"}, {url: "https://www.gardeningknowhow.com/wp-content/uploads/2007/03/flowers-1.jpg", label: "Image 2"}, {url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/japanese-garden-ideas-1619540857.jpg?crop=1.00xw:0.707xh;0,0.0876xh&resize=1200:*", label: "Image 3"}]
    return (
        <div style={styles.container}>
            <Carousel showThumbs={false} showIndicators={false} showArrows={size.lg} showStatus={false} autoPlay infiniteLoop interval={5000} emulateTouch
                      useKeyboardArrows swipeable
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
                    imgUrls.map(image => <CarouselImage url={image.url} label={image.label} />)
                }


            </Carousel>
        </div>
    )
}