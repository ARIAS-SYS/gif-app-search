import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category )

    console.log(isLoading)

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h1>Cargando...</h1>)
            }
            <div className="card-grid">
                {
                    images.map( ({ id, title, url }) => (
                        <GifItem key={ id } title={ title } url={ url } />
                    ))
                }
            </div>
        </>
    )
}