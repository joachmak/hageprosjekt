import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "./Carousel";

export default function Header() {
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
        <div>
            <CarouselComponent imgUrls={imgUrls} projectView={false} />
        </div>
    )
}