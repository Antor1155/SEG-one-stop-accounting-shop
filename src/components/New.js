import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function New() {
  const receivedData = useOutletContext()
  return (
    <div>this is the new page **** after about
      <p>{receivedData}</p>
    </div>
  )
}
