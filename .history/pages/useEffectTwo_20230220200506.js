import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from "react";
import { useState } from "react";


export default function useEffectTwo() {

    const [number, setNumber] = useState (0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return (
        <>
            <Link href = "/">Home</Link>
            <div>
                useEffectTwo
            </div>

            <div>

            </div>        
        </>
    )
}