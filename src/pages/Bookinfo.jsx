import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Bookinfo({ books }) {
  return (
<div id="books__body">
   <main id="books__main">
    <div className="books__container">
      <div className="row">
       <div className="book__selected--top">
        <Link to="/books" className="book__link"></Link>
        <FontAwesomeIcon icon="arrow-left" />
        </div>     
    </div>  
    </div>
    </main> 
</div>
  )
}
