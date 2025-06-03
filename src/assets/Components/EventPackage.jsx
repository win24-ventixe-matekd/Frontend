import React from 'react'

const EventPackage = ({name, price, currency, seating, description}) => {
  const formatCurrency = () => {
    if (currency === "$")
      return `${currency}${price}`
    return `${price}${currency}`
  }

  return (
    <div className='event-package'>
      <p className="name">{name}</p>
      <p className="seating">{seating}</p>
      <p className="description">{description}</p>
      <p className="price">{formatCurrency()}</p>
    </div>
  )
}

export default EventPackage