import Link from "next/link";

export default function (props) {
  return (
    <Link href={`/cakes/${props.data.cakeid}`}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.data.image}
          style={{ height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.price}</p>
        </div>
      </div>
    </Link>
  );
}
