import React from 'react'
import { useRouter } from 'next/router'

function Allcourse() {
    const router=useRouter();
    const slug=(router.query.all_courses);
  return (
    <div>
     <h2>this is {slug} page </h2>
    </div>
  )
}

export default Allcourse


