import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Bottombar = () => {
    return (
        <div className="bottombar-container relative">
            <div className="bottombar flex justify-between items-center">
                <div className="flex flex-col items-start">
                    <div className="logo">
                        <img
                            src="/assets/james_hot_chicken_landscape.png"
                            className="h-20"
                        />
                    </div>
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
                &copy; {new Date().getFullYear()} James’s Hot Chicken. All rights reserved.
            </div>
        </div>
    )
}

export default Bottombar
