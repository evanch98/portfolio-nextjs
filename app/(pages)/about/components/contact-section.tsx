"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <form
      className="w-full p-5 rounded-2xl bg-[#282B30] flex flex-col gap-y-5 shadow-lg"
      action="https://getform.io/f/7d7e9421-700a-4548-8a97-e472b180613d"
      method="POST"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 bg-transparent border border-white rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 bg-transparent border border-white rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          className="bg-transparent border border-white rounded-xl p-2"
          name="message"
          id="message"
          rows={5}
        ></textarea>
      </div>
      <button
        type="submit"
        className="p-2 border border-white rounded-xl hover:opacity-70 transition-opacity"
      >
        Let's Talk
      </button>
    </form>
  );
};

export default ContactSection;
