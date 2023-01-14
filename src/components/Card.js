import React from 'react'
import '../css/card.css'

function Card(props) {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT";
  }
  else if(props.item.location === "Online"){
    badgeText = "ONLINE";
  }

  return (
    <div className='card'>
      <img src={require(`../images/${props.item.coverImg}`)} alt="img" className='card-img'/>
      {badgeText && <p className="img-overlay-text">{badgeText}</p>}
      <div className="card-info">
        <box-icon type='solid' name='star' color='#FE395C' className="star"></box-icon>
        <span className='s1'>{props.item.stats.rating}</span>
        <span className='s2'>({props.item.stats.reviewCount}) •</span>
        <span className='s3'>{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price"><span>From ${props.item.price}</span> / person</p>
    </div>

  )
}


export default Card