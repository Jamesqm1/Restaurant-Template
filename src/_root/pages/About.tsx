
const About = () => {
    return (
        <div className="w-full min-h-screen bg-primary flex flex-col items-center">
            <section className="w-full py-20 bg-gradient-to-b from-red-600 to-red-800 text-primary text-center shadow-lg">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Story</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                    James’s Hot Chicken was born from a craving for bold Nashville heat and
                    a passion for local flavor. What started as backyard experiments with
                    friends and family quickly turned into a mission: bringing Dallas a
                    taste of crispy, juicy hot chicken with unforgettable spice.
                </p>
            </section>

            <section className="py-16 px-6 w-full max-w-6xl grid gap-12 md:grid-cols-2">
                <div className="bg-secondary rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We believe great food should be more than a meal — it should be an
                        experience. That’s why we hand-season every batch of chicken, fry it
                        to golden perfection, and toss it in sauces that balance fiery heat
                        with rich flavor.
                    </p>
                </div>

                <div className="bg-secondary rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-bold mb-4">Made Fresh, Always</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Every plate of hot chicken is prepared fresh to order. From the
                        crunch of the first bite to the lingering heat that keeps you coming
                        back, we make sure every detail delivers on flavor and quality.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 w-full max-w-6xl grid gap-12 md:grid-cols-2">
                <div className="bg-secondary rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-bold mb-4">Community First</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Dallas is home, and we’re proud to serve our neighbors. Whether
                        you’re grabbing a quick lunch, feeding the whole family, or stopping
                        by after a long day, we want James’s Hot Chicken to feel like your
                        go-to spot for comfort food with a kick.
                    </p>
                </div>

                <div className="bg-secondary rounded-2xl shadow p-8">
                    <h2 className="text-2xl font-bold mb-4">More Than Heat</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Don’t worry if you’re not ready for maximum spice — we’ve got a
                        flavor for everyone. From mild and flavorful to extra hot for the
                        spice warriors, every level is crafted to perfection.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 w-full text-center">
                <h2 className="text-3xl font-bold mb-6">Join the Family</h2>
                <p className="max-w-2xl mx-auto text-gray-700 mb-8 leading-relaxed">
                    At James’s Hot Chicken, we’re more than just a restaurant — we’re a
                    gathering place. So come hungry, bring your friends, and leave with a
                    full heart (and maybe a little sweat on your brow).
                </p>
                <img
                    src="/assets/james_hot_chicken_square.png"
                    alt="James’s Hot Chicken"
                    className="mx-auto h-48 rounded-xl shadow-lg"
                />
            </section>
        </div>
    )
}

export default About
