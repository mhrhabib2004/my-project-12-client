
const ContactUs = () => {
    return (
        <section className="bg-blue-50 dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-4">
                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                        Contact
                    </p>
                    <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea dictumst</p>
                </div>
            </div>
            <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2">
                    <div className="h-full pr-6">
                        <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                        There a chance metromony is a brand name for a particular matchmaking service or website.  Without more information, it difficult to describe this specific service...
                        </p>
                        <ul className="mb-6 md:mb-0">
                            {/* List items */}
                        </ul>
                    </div>
                    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                        <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                        <form id="contactForm">
                            <div className="mb-6">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ContactUs;