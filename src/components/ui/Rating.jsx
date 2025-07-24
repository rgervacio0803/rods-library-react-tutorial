import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Rating({ rating }) {
  return (
    <div className='book__ratings'> 
      {
       new Arr(Math.floor(books.rating)).fill(0).map((_, index)) 
      }
      {
        !Number.isInteger(books.rating) && <FontAwesomeIcon icon=""
      }
    </div>
  )
}
