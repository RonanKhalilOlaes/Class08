import Link from "next/link";
import { useEffect, useState } from "react";
import Home from "@/pages/index.js";


export default function useEffectOne () {

    const [number, setNumber] = useState (0);

    useEffect(() => {
        console.log(number);
        setNumber( number + 1 )
    })

    return (
        <>
            <Link href="/pages/index.js">Home</Link>

            <div>
                useEffectOne
            </div>

            <div>
                {number}
            </div>
        </>
    )
}