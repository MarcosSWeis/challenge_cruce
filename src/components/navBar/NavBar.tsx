import React, { useContext, useEffect } from 'react'
import Menu from './Menu'
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import cart from '../../assets/shopping_cart.svg'
import { AppContext } from '../../context/AppContext'
interface NavBarProps {

}

type Item = {
    text: string
    link: string
}
interface IMenu {
    menu: Array<Item>
}




const NavBar: React.FunctionComponent<NavBarProps> = () => {
    const { userLogged, logout } = useContext(AppContext)
    const user = userLogged.userLogged
    const location = useLocation();
    const navigate = useNavigate()
    console.log(userLogged)


    function handlerCart() {
        user ? navigate('/carrito') : navigate('/login', {
            state: {
                from: {
                    ...location,
                    pathname: '/carrito'
                }
            }
        })
    }
    useEffect(() => {

    }, [userLogged])
    const menu: IMenu['menu'] = [

        {
            text: 'home',
            link: '/'
        },
        {
            text: "Categorías",
            link: '/categorias'
        },
        {
            text: "Juguetes",
            link: '/juguetes'
        },
        {
            text: "CryBabies",
            link: '/bebesLlorones'
        },
        {
            text: "Funko",
            link: '/funko'
        },
        {
            text: "Hot sale!",
            link: '/hotSale'
        },
    ]


    return (
        <section className="sticky-top bg-white" style={{ backgroundColor: '#EAEBF3' }}  >
            <nav className="navbar navbar-expand-lg p-3 border-bottom container_navbar ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="bi bi-list"></span>
                    </button>

                    <Link to={'/'} className='d-flex justify-content-start w-50 m-auto bg-white text-dark text-decoration-none' >
                        <img
                            src={logo}
                            alt="Logo ong"
                            height={"40px"}
                            className='m-auto'
                        />
                    </Link>
                    <div className='containerCartNavBar' >
                        <img
                            src={cart}
                            alt="Logo ong"
                            height={"40px"}
                            style={{ transform: "scale(0.6)" }}
                            onClick={handlerCart}
                        />
                        {
                            user && <h6 style={user.shoppingCart.length < 10 ? { right: '-0.3rem' } : { right: '-1rem' }}>{user.shoppingCart.length}</h6>
                        }
                    </div>


                    <div
                        className="collapse navbar-collapse  justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                {menu.map((item: Item) => <Menu key={item.text} text={item.text} link={item.link} />)}
                            </ul>
                        </div>
                        <div className=" ">

                            {
                                user ?
                                    <button
                                        className="btn btn-danger mx-3  rounded-pill"
                                        type="submit"
                                        style={{ transform: "scale(1.2)" }}
                                        onClick={() => { logout() }}
                                    >
                                        Log Out
                                    </button> :
                                    <div className='text-center'>
                                        <button
                                            className="btn text-dark rounded-pill border border-dark mx-3"
                                            type="submit"
                                            style={{ transform: "scale(1.2)" }}
                                        /* onClick={() => { navigate('/login') }} */
                                        >
                                            <i className="bi bi-person"></i>
                                        </button>

                                        <button
                                            className="btn btn-danger mx-3  rounded-pill"
                                            type="submit"
                                            style={{ transform: "scale(1.2)" }}
                                        /*  onClick={() => { navigate('/registrarse') }} */
                                        >
                                            Registrate
                                        </button>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
            </nav>
        </section >
    )
}

export default NavBar;