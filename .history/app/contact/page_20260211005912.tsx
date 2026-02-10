export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Get Your Shipment Moving
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a query or need courier coordination? Reach out and we’ll assist
            you with the best possible solution.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              Whether it’s documents, parcels, or business logistics — we’re
              here to help you choose the right courier partner quickly and
              efficiently.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">
              <p>📍 <span className="font-medium">Service Area:</span> PAN India</p>
              <p>📞 <span className="font-medium">Phone:</span> +91 XXXXX XXXXX</p>
              <p>✉️ <span className="font-medium">Email:</span> info@yourcompany.com</p>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              We usually respond within one business day.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-50 p-8 rounded-xl border">
            <form
              action="https://formspree.io/f/mkovooen" // 🔴 REPLACE WITH YOUR REAL FORM ID
              method="POST"
              className="space-y-5"
            >
              {/* NAME */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="
                    mt-1 w-full rounded-md border-gray-300
                    focus:border-orange-500 focus:ring-orange-500
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="
                    mt-1 w-full rounded-md border-gray-300
                    focus:border-orange-500 focus:ring-orange-500
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your shipment requirements"
                  className="
                    mt-1 w-full rounded-md border-gray-300
                    focus:border-orange-500 focus:ring-orange-500
                  "
                />
              </div>

              {/* OPTIONAL SUBJECT */}
              <input
                type="hidden"
                name="_subject"
                value="New Courier Enquiry"
              />

              {/* IMPORTANT: REDIRECT (PREVENTS METHOD ERROR) */}
              <input
                type="hidden"
                name="_redirect"
                value="http://localhost:3000/thank-you"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  w-full bg-orange-500 text-white py-3 rounded-md font-semibold
                  hover:bg-orange-600 hover:scale-[1.02]
                  transition-all
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="bg-blue-50 py-12 text-center">
        <p className="text-lg font-medium text-gray-900">
          Your information is safe with us. We only use it to assist with your
          delivery needs.
        </p>
      </section>
    </>
  );
}
