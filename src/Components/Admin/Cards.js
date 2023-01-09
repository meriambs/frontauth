import React from 'react'
import './Cards.css'
const Cards = ({miniuser}) => {
  console.log('les users objs ',miniuser)
  return (
    <div>
  {
    miniuser.role==='admin'?(  <ul class="tilesWrap">
    <li>
    
    <h3>{miniuser.name}</h3>
    <p>{miniuser.role}</p>
    <p>
    {miniuser.email}
    </p>
    </li>
    </ul>):(<><hr/> <p>users</p>   <ul class="tilesWrap">
<li>

<h3>{miniuser.name}</h3>
<p>{miniuser.role}</p>
<p>
{miniuser.email}
</p>
</li>
</ul></> )
  }
</div>  )
}

export default Cards