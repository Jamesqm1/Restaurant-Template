import React from "react"

const menuData: Record<
    string,
    { title: string; description: string; price: string; image: string }[]
> = {
    "Sandwiches": [
        {
            title: "Hot Chicken Sandwich",
            description: "A classic crispy chicken sandwich packed with flavor and heat.",
            price: "$9.99",
            image: "/assets/menu_items/chicken_sandwhich.png",
        },
    ],
    "Tenders": [
        {
            title: "Tenders Basket",
            description: "Juicy chicken tenders served with fries and dipping sauces.",
            price: "$11.99",
            image: "/assets/menu_items/tender_basket.png",
        },
    ],
    "Family Meals": [
        {
            title: "Family Feast",
            description: "Enough hot chicken to satisfy the whole crew.",
            price: "$24.99",
            image: "/assets/menu_items/family_feast.png",
        },
    ],
}

const Menu = () => {
    const handleScroll = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <div className="w-full min-h-screen bg-primary flex flex-col items-center py-10 px-6">
            <h1 className="text-4xl font-extrabold mb-6 text-center">Our Menu</h1>

            {/* Section Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {Object.keys(menuData).map((section) => (
                    <button
                        key={section}
                        onClick={() => handleScroll(section)}
                        className="px-4 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 shadow"
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Menu Sections */}
            <div className="w-full max-w-6xl space-y-16">
                {Object.entries(menuData).map(([section, items]) => (
                    <div key={section} id={section}>
                        <h2 className="text-3xl font-bold mb-6 text-center">{section}</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-secondary rounded-2xl shadow p-6 flex flex-col items-center text-center w-72"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-32 mb-4 rounded-lg object-cover"
                                    />
                                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-2">{item.description}</p>
                                    <span className="font-semibold text-red-700">{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu
