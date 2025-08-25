import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
    const location = useLocation();
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const toggleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                drawerRef.current &&
                !drawerRef.current.contains(target) &&
                toggleRef.current &&
                !toggleRef.current.contains(target)
            ) {
                setDrawerOpen(false);
            }
        };

        if (isDrawerOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDrawerOpen]);

    useEffect(() => {
        setDrawerOpen(false);
    }, [location.pathname]);

    return (
        <>
            <div className='topbar-container'>
                <div className='topbar'>
                    <NavLink to="/" className='logo'>
                        <img src="/assets/james_hot_chicken_text.png" className='h-[80px] p-1' />
                    </NavLink>

                    {/* Desktop Links */}
                    <div className='topbar-links'>
                        <NavLink to="/menu" className='topbar-link'>Menu</NavLink>
                        <NavLink to="/about" className='topbar-link'>About</NavLink>
                        <NavLink to="/contact" className='topbar-link'>Contact</NavLink>
                    </div>

                    {/* Mobile Drawer Toggle */}
                    <div
                        ref={toggleRef}
                        onClick={() => setDrawerOpen(!isDrawerOpen)}
                        className="md:hidden z-30 p-4 cursor-pointer"
                    >
                        <div className={`space-y-1.5 transition-transform duration-300 ${isDrawerOpen ? 'rotate-45' : ''}`}>
                            <span
                                className={`block h-1 w-6 bg-current rounded-full transition-all duration-300 ${isDrawerOpen ? 'rotate-90 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`block h-1 w-6 bg-current rounded-full transition-all duration-150 ${isDrawerOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`block h-1 w-6 bg-current rounded-full transition-all duration-300 ${isDrawerOpen ? '-rotate-180 -translate-y-3' : ''
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Drawer */}
            <div
                ref={drawerRef}
                className={`fixed top-0 right-0 h-full w-30 z-[100] bg-primary dark:bg-dark-4 shadow-2xl transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col w-full h-full pt-32 pr-8 gap-4 items-end">
                    <NavLink
                        to="/menu"
                        className="topbar-link text-2xl hover:translate-x-2 transition-transform"
                        onClick={() => setDrawerOpen(false)}
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="topbar-link text-2xl hover:translate-x-2 transition-transform"
                        onClick={() => setDrawerOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="topbar-link text-2xl hover:translate-x-2 transition-transform"
                        onClick={() => setDrawerOpen(false)}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Topbar;