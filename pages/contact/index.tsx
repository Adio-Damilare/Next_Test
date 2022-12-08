import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div>All contact are here
      <Link href="/">Go to the landing page</Link>
      <Link href="/contact/more"><button className="btn btn-info">See more</button></Link>
    </div>
  )
}

export default Contact