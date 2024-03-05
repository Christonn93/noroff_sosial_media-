import React from 'react'
import { updateHead } from '../js/updateHeader';

const NotFound = () => {

  updateHead("404");

  return (
    <div>NotFound</div>
  )
}

export default NotFound