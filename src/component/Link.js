import React from 'react'

const Link = ({ active, children, onClick }) => (
    <a
       onClick={onClick}
       disabled={active}
    >
      {children}
    </a>
)

export default Link