import Carousel from "@/component/carousel";
import Link from "next/link";
import styles from '@/styles/Home.module.css'

export default function CarouselPage() {
    return (
        <>
        <div className={styles.page}>
            <Link href="/">Home</Link>
            <Carousel/>
        </div>
        </>
    )
}