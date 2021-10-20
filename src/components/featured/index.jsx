import { useEffect, useState } from "react"

import products from 'services'


export default () => {

    const [state, setState] = useState([])
    useEffect(() => {
        (async () => {
            const result = await products.getFeatured()
            setState(result.data.featured)
        })()

    }, [])
    console.log("STATE", state)

    return(
        state.map(element => {
            return (
                <section>
                    <p>{element.name}</p>
                </section>
            )
        })
    )
    }