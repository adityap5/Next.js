import {notFound} from "next/navigation"
export default function reviewId({params}){
    if(parseInt(params.reviewId) > 100){
     notFound();
    }
    return <h1>review {params.reviewId} of product {params.productID}</h1>
}