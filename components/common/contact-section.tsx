"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { motion } from "framer-motion";

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
});

type formValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: formValues) => {
    try {
      setLoading(true);
      await axios.post(
        "https://getform.io/f/7d7e9421-700a-4548-8a97-e472b180613d",
        data
      );
      router.refresh();
      toast.success("Message sent.");
    } catch (e) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full p-5 rounded-2xl bg-[#282B30] shadow-lg"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent"
                      disabled={loading}
                      placeholder="Kyaw Thu"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent"
                      disabled={loading}
                      placeholder="evanch98@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg">Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    className="bg-transparent"
                    disabled={loading}
                    placeholder="Type your message here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-white text-[#1E2124] dark:bg-[#1E2124] dark:text-white"
            type="submit"
            disabled={loading}
          >
            Let's Talk
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactSection;
