import React from 'react'
import { Container,Log,LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'//to check user login or not
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status) //acess initialState status:false, from authSlice
  const navigate =useNavigate ()//same as dispatch
  //maek array for navigate
  const navItems = [
    //pros put multiple vlaue in single array
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,//if true display
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header className='py-3 shadow bg-slate-500'>
      <Container>
        <nav className='flex'>
          <div className=' mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
              item.active ? (
                <li key={item.name}>
                  {/* navitgatiion /signup etc or can use buy Link*/}
                  <button onClick={() => navigate (item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full '>
                    {item.name} 
                  </button>
                </li>
              ) : null
            )}
            {/* if satatus is true then show  */}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            ) }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
