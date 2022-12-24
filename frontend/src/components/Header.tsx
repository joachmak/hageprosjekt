import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "./Carousel";
import {useEffect, useState} from "react";
import sanityClient from "../client";

export default function Header() {
    const [data, setData] = useState([])
    useEffect(() => {
        sanityClient.fetch("*[_type == 'topp-bilder']{\n" +
            " toppbildesett[]{'title': title, 'label': subtitle, 'url': asset->url}" +
            "}").then((d) => {
            // @ts-ignore
            setData(d.map(img => img["toppbildesett"])[0])
        })
    }, [])
    return (
        <div>
            <CarouselComponent imgUrls={data} projectView={false} />
        </div>
    )
}