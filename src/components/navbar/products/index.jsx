import { Grid } from "@mui/material"
import ProductCard from "../../card"

const products = [
    {
        title: "Prodotto1",
        description : "Descrizione prodotto1"
    },
        {
        title: "Prodotto2",
        description : "Descrizione prodotto2"
    },
        {
        title: "Prodotto3",
        description : "Descrizione prodotto3"
    },
        {
        title: "Prodotto4",
        description : "Descrizione prodotto4"
    },
            {
        title: "Prodotto5",
        description : "Descrizione prodotto5"
    },
    {
        title: "Prodotto6",
        description : "Descrizione prodotto6"
    },
            {
        title: "Prodotto7",
        description : "Descrizione prodotto7"
    },
            {
        title: "Prodotto8",
        description : "Descrizione prodotto8"
    }
]

function Product() {
    return (
        <Grid container spacing={2}>
            { products.map (product =>
            <Grid size = {{ xs:4, md:3}} key = {product}>
                <ProductCard title = {product.title} description = {product.description}/>
            </Grid>)}
        </Grid>
    )
}

export default Product