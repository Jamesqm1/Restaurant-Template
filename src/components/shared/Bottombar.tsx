import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Bottombar = () => {
    return (
        <div className="bottombar-container relative">
            {/* Mobile: Logo and socials in separate div above copyright */}
            <div className="md:hidden w-full">
                <div className="flex justify-between items-center pb-8">
                    <div className="logo">
                        <img
                            src="/assets/james_hot_chicken_landscape.png"
                            className="h-16"
                        />
                    </div>

                    <div className="flex flex-row gap-6 text-xl">
                        <a href="" target="_blank" className="bottom-bar-social-link">
                            <FaFacebookF />
                        </a>
                        <a href="" target="_blank" className="bottom-bar-social-link">
                            <FaInstagram />
                        </a>
                        <a href="" target="_blank" className="bottom-bar-social-link">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                <div className="text-center text-sm">
                    &copy; {new Date().getFullYear()} James's Hot Chicken. All rights reserved.
                </div>
            </div>

            {/* Desktop: All in one div with absolute positioned copyright */}
            <div className="hidden md:block w-full">
                <div className="bottombar flex justify-between items-center">
                    <div className="logo">
                        <img
                            src="/assets/james_hot_chicken_landscape.png"
                            className="h-20"
                        />
                    </div>

                    <div className="flex flex-row gap-8 text-xl">
                        <a href="" target="_blank" className="bottom-bar-social-link">
                            <FaFacebookF />
                        </a>
                        <a href="" target="_blank" className="bottom-bar-social-link">
                            <FaInstagram />
                        </a>
                        <a href="" target="_blank" className="bottom-bar-social-link">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-sm">
                    &copy; {new Date().getFullYear()} James's Hot Chicken. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Bottombar