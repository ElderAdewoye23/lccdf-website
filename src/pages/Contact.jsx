import React from 'react'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto font-body">
      <h1 className="text-3xl md:text-4xl font-heading text-primary mb-4">
        Contact Us
      </h1>
      <p className="text-gray-700 mb-8 max-w-xl">
        We'd love to hear from you. Whether you're reaching out for collaboration,
        support, or inquiries—feel free to contact us via phone, email, or visit our office.
      </p>

      {/* Contact Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-10">
        <h2 className="text-2xl font-heading text-darkgreen mb-4">
          LIVING CARE COMMUNITY DEVELOPMENT FOUNDATION (LCCDF)
        </h2>
        <div className="space-y-2 text-gray-800">
          <p>
            <strong>📍 Head Office:</strong> Opposite LGEA Primary School, Oke-Ose,
            Ilorin East LGA, Kwara State
          </p>
          <p>
            <strong>📞 Tel:</strong> +234 703 714 7543, +234 807 201 1082
          </p>
          <p>
            <strong>✉️ Email:</strong> livingcarefoundation@gmail.com
          </p>
        </div>
      </div>

      {/* Optional: Contact Form (ready to extend in the future) */}
      <ContactForm />
    </div>
  )
}

export default Contact
