import Link from "next/link"
import { useEffect, useState } from "react"


export default function useEffectThree () {
    const [number, setNumber] = useState (0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return (
        <>

        <div className={styles.page}>
            <Link href="/">Home</Link>
            <div>
                <button onClick={() => setNumber (number + 1)}>Click me</button>
            </div>
            <div>
                useEffectThree
            </div>
            <div>
                {value}
            </div>
        </div>
        </>
    )
}