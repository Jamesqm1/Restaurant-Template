import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaPhone, FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6"

const contactSchema = z.object({
    name: z.string().min(2, "Please enter your full name"),
    email: z.string().email("Enter a valid email"),
    phone: z
        .string()
        .optional()
        .transform(v => (v ? v.trim() : ""))
        .refine(v => !v || /^\+?[0-9()\-\s]{7,}$/.test(v), "Enter a valid phone number"),
    subject: z.string().min(3, "Subject is too short"),
    message: z.string().min(10, "Message should be at least 10 characters"),
    consent: z.literal(true, { errorMap: () => ({ message: "Please accept the terms" }) }),
})

type ContactForm = z.infer<typeof contactSchema>

const Contact = () => {
    const [submitted, setSubmitted] = useState<null | "ok" | "err">(null)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

    const onSubmit = async (data: ContactForm) => {
        try {
            await new Promise(r => setTimeout(r, 600))
            setSubmitted("ok")
            reset()
        } catch {
            setSubmitted("err")
        }
    }

    return (
        <div className="w-full min-h-screen bg-primary flex flex-col items-center">
            <section className="w-full py-20 bg-gradient-to-b from-red-600 to-red-800 text-primary text-center shadow-lg">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Contact Us</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl">Questions, catering, feedback, or just craving heat—reach out and we’ll get back quickly.</p>
            </section>

            <section className="py-12 px-6 w-full max-w-6xl grid gap-8 md:grid-cols-3">
                <div className="bg-secondary rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-3">Call</h2>
                    <a href="tel:+1234567890" className="inline-flex items-center gap-3 text-red-700 font-semibold">
                        <FaPhone />
                        (123) 456-7890
                    </a>
                    <p className="text-gray-700 mt-3">Mon–Sat: 11am–9pm • Sun: 12pm–8pm</p>
                </div>

                <div className="bg-secondary rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-3">Visit</h2>
                    <p className="text-gray-700">123 Flavor Street<br />Dallas, TX 75201</p>
                    <a
                        className="mt-3 inline-block text-red-700 font-semibold"
                        href="https://maps.google.com/?q=123+Flavor+Street+Dallas+TX+75201"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open in Maps
                    </a>
                </div>

                <div className="bg-secondary rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-3">Social</h2>
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-2 rounded-full bg-primary hover:bg-gray-100 shadow"><FaInstagram /></a>
                        <a href="#" className="p-2 rounded-full bg-primary hover:bg-gray-100 shadow"><FaXTwitter /></a>
                        <a href="#" className="p-2 rounded-full bg-primary hover:bg-gray-100 shadow"><FaFacebookF /></a>
                    </div>
                    <p className="text-gray-700 mt-3">@jamesshotchicken</p>
                </div>
            </section>

            <section className="w-full max-w-6xl px-6 pb-20">
                <div className="bg-secondary rounded-2xl shadow p-6 md:p-10">
                    <h2 className="text-3xl font-bold mb-6 text-center">Questions • Concerns • Feedback</h2>

                    {submitted === "ok" && (
                        <div className="mb-6 rounded-xl border border-green-600 bg-green-50 px-4 py-3 text-green-800">
                            Thanks for reaching out! We received your message.
                        </div>
                    )}
                    {submitted === "err" && (
                        <div className="mb-6 rounded-xl border border-red-600 bg-red-50 px-4 py-3 text-red-800">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-semibold mb-2">Full Name</label>
                            <input
                                className="w-full rounded-xl border px-4 py-3 bg-primary focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Jane Doe"
                                {...register("name")}
                            />
                            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">Email</label>
                            <input
                                className="w-full rounded-xl border px-4 py-3 bg-primary focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="jane@example.com"
                                {...register("email")}
                                type="email"
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">Phone (optional)</label>
                            <input
                                className="w-full rounded-xl border px-4 py-3 bg-primary focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="(555) 555-5555"
                                {...register("phone")}
                            />
                            {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">Subject</label>
                            <input
                                className="w-full rounded-xl border px-4 py-3 bg-primary focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Catering request, compliment, etc."
                                {...register("subject")}
                            />
                            {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>}
                        </div>

                        <div className="md:col-span-2">
                            <label className="block font-semibold mb-2">Message</label>
                            <textarea
                                className="w-full rounded-xl border px-4 py-3 bg-primary min-h-[140px] focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Tell us what’s on your mind"
                                {...register("message")}
                            />
                            {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
                        </div>

                        <div className="md:col-span-2 flex items-start gap-3">
                            <input type="checkbox" className="mt-1 h-5 w-5" {...register("consent")} />
                            <span className="text-sm text-gray-700">
                                I agree to be contacted about my inquiry and that my information will be handled according to the site’s terms.
                            </span>
                        </div>
                        {errors.consent && <p className="md:col-span-2 -mt-4 text-sm text-red-600">{errors.consent.message}</p>}

                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 rounded-full bg-red-600 text-white font-bold shadow hover:bg-red-700 disabled:opacity-60"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
