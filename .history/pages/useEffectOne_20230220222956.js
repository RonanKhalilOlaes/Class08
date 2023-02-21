import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'



export default function useEffectOne () {

    const [number, setNumber] = useState (0);

    useEffect(() => {
        console.log(number);
        setNumber( number + 1 )
    }, )

    return (
        <>

        <div className={styles.page}>
            <Link href="/">Home</Link>

            <div>
                useEffectOne
            </div>

            <div>
                {number}
            </div>
        </div>
        </>
    )
}