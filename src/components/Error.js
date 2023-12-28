import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
      <div id="error-page" class="error-page-container">
         <div class="content">
            <h2 class="header" data-text="404">
               404
            </h2>
            <h4 class="error-heading" data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p class="error-message">
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div class="btns">
               <NavLink to="/">Return Home</NavLink>
               {/* <a href="https:">report problem</a> */}
            </div>
         </div>
      </div>
    </>
  )
}

export default Error
