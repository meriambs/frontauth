import React from 'react'
import './navbar.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarContainer = ({auth,logout}) => {
  console.log('lina nav account auth ', auth)
  return (
    <div>

       {/* //ici nous avons un affichge selon le role de notre utilisateur si 
       c'eest un admin alors juste le home et work , si nn le reste dans le cas d'un utilisateur  */}

       
        <nav class="navMenu">

          {auth.role==='admin' ?  ( <>
             <a href="#">Home</a>
           
             <a href="#">Work</a>
            
             </>): ( <>
             <a href="#">Home</a>
             <a href="#">Blog</a>
             <a href="#">Work</a>
             <a href="#">About</a>
             </>)}

  
      <Button variant="outline-secondary"   onClick={()=>logout()}>Logout</Button>

    
    </nav>
    </div>
  )
}

export default NavBarContainer