import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-primary flex flex-col items-center">

            <section className="w-full flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-red-600 to-red-800 text-primary shadow-lg">
                <img src="/assets/james_hot_chicken_square.png" alt="James's Hot Chicken" className="h-60 mb-6 rounded-xl" />
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Nashville Heat, Local Flavor</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                    Crispy, juicy, and fiery — James’s Hot Chicken brings authentic hot chicken right to your plate.
                </p>
                <NavLink
                    to="/menu"
                    className="px-6 py-3 bg-primary text-red-700 font-bold rounded-full shadow hover:bg-gray-100"
                >
                    See Our Menu
                </NavLink>
            </section>

            <section id="menu" className="py-16 px-6 w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-10">Our Favorites</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-secondary rounded-2xl shadow p-6 flex flex-col items-center text-center">
                        <img src="/assets/menu_items/chicken_sandwhich.png" alt="Hot Chicken Sandwich" className="h-32 mb-4 rounded-lg" />
                        <h3 className="font-bold text-xl mb-2">Hot Chicken Sandwich</h3>
                        <p className="text-gray-600">A classic crispy chicken sandwich packed with flavor and heat.</p>
                    </div>
                    <div className="bg-secondary rounded-2xl shadow p-6 flex flex-col items-center text-center">
                        <img src="/assets/menu_items/tender_basket.png" alt="Tenders Basket" className="h-32 mb-4 rounded-lg" />
                        <h3 className="font-bold text-xl mb-2">Tenders Basket</h3>
                        <p className="text-gray-600">Juicy chicken tenders served with fries and dipping sauces.</p>
                    </div>
                    <div className="bg-secondary rounded-2xl shadow p-6 flex flex-col items-center text-center">
                        <img src="/assets/menu_items/family_feast.png" alt="Family Feast" className="h-32 mb-4 rounded-lg" />
                        <h3 className="font-bold text-xl mb-2">Family Feast</h3>
                        <p className="text-gray-600">Enough hot chicken to satisfy the whole crew.</p>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-primary w-full py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-700 text-lg">
                        James’s Hot Chicken started with a love for bold flavors and southern tradition.
                        Our goal is simple: serve up the crispiest, juiciest hot chicken you’ll ever taste.
                    </p>
                </div>
            </section>

            <section id="contact" className="w-full py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                <p className="text-gray-700 mb-6">123 Flavor Street, Dallas, TX</p>
                <a
                    href="tel:+1234567890"
                    className="px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow hover:bg-red-700"
                >
                    Call to Order
                </a>
            </section>
        </div>
    )
}

export default Home
