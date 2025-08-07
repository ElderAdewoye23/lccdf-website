import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../data/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("SUCCESS!", res.status, res.text);
      reset(); // Reset the form after submission
      setStatus({ type: "success", message: "Message sent successfully!" });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };
  

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <h3 className="text-xl font-heading text-primary mb-4">
        Send Us a Message
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">
              {errors.fullName.message}
            </span>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
            </span>
          )}
        </div>
        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-darkgreen transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p
            className={`text-sm ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
