import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "./Carousel";

export default function Header() {
    let imgUrls = [{
        url: "/img/header/1.jpg",
        title: "Tilbud",
        label: "Hageplanlegging i 2D og 3D, planting, bygging av gjerder, støttemurer, trapper, terasser og mer!"
    }, {
        url: "/img/header/2.jpg",
        title: "Privat og bedrift",
        label: "Hageprosjekt utfører hager både for privatpersoner og bedrifter, og har et tett samarbeid med kunden utover prosjektet."
    }, {
        url: "/img/header/3.jpg",
        title: "Hageprosjekt",
        label: "Ditt ønske - vårt oppdrag"
    }]
    return (
        <div>
            <CarouselComponent imgUrls={imgUrls} projectView={false} />
        </div>
    )
}