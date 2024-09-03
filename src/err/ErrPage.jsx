import React from 'react'
import { ErrMainBody } from './ErrPageStyle'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrPage = () => {
  const Navigate = useNavigate()
  // const error = useRouteError();
  // console.log(error, "error")
  return (
    <ErrMainBody>
      <h1>404!</h1>
      <h4> No routes matched location</h4>
      <button onClick={()=> Navigate("/")}>Go back to home </button>
      {/* history.ts:501 */}
    </ErrMainBody>
  )

}

export default ErrPage