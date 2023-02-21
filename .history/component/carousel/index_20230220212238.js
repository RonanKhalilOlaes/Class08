import CarouselPage from "@/pages/carouselPage"
import Link from "next/link"

export default function Carousel () {
    return(
        <>
            <div style={{
                backgroundImage:"url(/carousel-images/0.jpeg)",
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                width: 500,
                height: 300
            }}>

            </div>
        </>
    )
}