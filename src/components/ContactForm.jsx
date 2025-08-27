import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../data/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

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
      reset();
      setStatus({ type: "success", message: "Message sent successfully!" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 border rounded-lg shadow-sm"
    >
      <h3 className="text-xl font-heading text-primary mb-4">
        Send Us a Message
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {["fullName", "email", "subject"].map((field, idx) => (
          <motion.div key={field} whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <input
              type={field === "email" ? "email" : "text"}
              placeholder={field === "fullName" ? "Full Name" : field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              {...register(field, { required: true })}
            />
            {errors[field] && (
              <span className="text-red-500 text-sm">{errors[field].message}</span>
            )}
          </motion.div>
        ))}

        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-darkgreen transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        <AnimatePresence>
          {status && (
            <motion.p
              key={status.message}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`text-sm ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}

export default ContactForm;
