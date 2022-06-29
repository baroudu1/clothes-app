import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom'

import "./navigation.style.scss"
import { ReactComponent as MrbooLogo } from '../../assets/logo/mrboo-logo.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <MrbooLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/shop' className='nav-link'>SHOP</Link>
                    <Link to='/contact' className='nav-link'>CONTACT</Link>
                    <Link to='/auth' className='nav-link'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;
