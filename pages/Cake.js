import Link from "next/link"

export default function(props){
    return (
        <Link href={`/cakes/${props.data.cakeid}`}><div class="card" style={{width: "18rem"}}>
  <img src={props.data.image} style={{height:"200px"}} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.data.name}</h5>
    <p class="card-text">{props.data.price}</p>
  </div>
</div></Link>
    )
}