import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "./Carousel";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import sanityClient from "../client";

interface Props {
    setHasPageLoaded: Dispatch<SetStateAction<boolean>>
}

export default function Header(props: Props) {
    const [data, setData] = useState([])
    const [headerImagesLoadedCount, setHeaderImagesLoadedCount] = useState(0)
    useEffect(() => {
        if (data.length === 0) props.setHasPageLoaded(false)
        else if (headerImagesLoadedCount >= data.length) {
            props.setHasPageLoaded(true)
        }
    }, [headerImagesLoadedCount, data.length, props])
    useEffect(() => {
        sanityClient.fetch("*[_type == 'topp-bilder']{\n" +
            " toppbildesett[]{'title': title, 'label': subtitle, 'url': asset->url}" +
            "}").then((d) => {
            // @ts-ignore
            setData(d.map(img => img["toppbildesett"])[0])
            d[0]["toppbildesett"].forEach((img: { url: string; }) => {
                const image = new Image()
                image.src = img.url
                image.onload = () => setHeaderImagesLoadedCount(prev => prev + 1)
            })
        })
    }, [])
    return (
        <div>
            <CarouselComponent imgUrls={data} projectView={false} />
        </div>
    )
}