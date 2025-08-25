// import { ThemeToggle } from '@/components/shared';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='topbar-container'>
            <div className='topbar'>
                <NavLink to="/" className='logo'><img src="/assets/james_hot_chicken_text.png" className='h-[80px] p-1'/></NavLink>
                <div className='topbar-links'>
                    <NavLink to="/menu" className='topbar-link'>Menu</NavLink>
                    <NavLink to="/about" className='topbar-link'>About</NavLink>
                    <NavLink to="/contact" className='topbar-link'>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Topbar;