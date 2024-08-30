import "./Card.css"
export const Card = ({title, price, address, date, img}) => {

  return (
    <a
    href="/product.html"
    className="card" >
    <div className="card--image">
      <img src={img} alt="card-img" />
    </div>
    <h5 className="card--title">
     {title}
    </h5>
    <strong>{price}</strong>
    <div className="card--descr-block">
      <span>{address}</span>
      <span>{date}</span>
    </div>
  </a>
  )
}
