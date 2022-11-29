import React from 'react'

export default function Modal({open,children}) {
    if(!open)
        return null
  return (
    <div>
        {children}
    </div>
  )
}
