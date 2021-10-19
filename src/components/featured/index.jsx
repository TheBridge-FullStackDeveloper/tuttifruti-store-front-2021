import { useEffect, useState } from "react"

import products from 'services'

export default () => {
    const [featuredProducts, setFeaturedProducts] = useState(null)
    useEffect(() => {
        const fetch = async () => {
            const response = await products.getFeatured()
            setFeaturedProducts(response)
        }
    }, [])
    return (
        <section>
            Hola hola
        </section>
    )
}