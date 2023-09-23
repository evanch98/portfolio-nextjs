"use client";

import Button from "@/components/common/button";
import { Container } from "@/components/common/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaDribbble,
  FaInstagram,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot be more than 50 characters." }),
  email: z.string().email({
    message: "Please provide a valid email address so that I can contact you.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export const ContactForm = () => {
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post(
        "https://getform.io/f/7d7e9421-700a-4548-8a97-e472b180613d",
        values
      );
      router.refresh();
      toast.success(
        "Thank you for contacting me. I will get back to you as soon as I can."
      );
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-[128px]">
      <div className="w-full px-[104px] text-[--black] flex gap-x-[128px]">
        <div className="w-[590px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-y-[96px] items-start justify-center"
            >
              <div className="flex gap-x-[128px] w-full">
                <div className="flex flex-col gap-y-[96px] w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-[24px] w-full">
                        <FormLabel className="heading-6-regular">
                          What is your name?
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            {...field}
                            className="border-t-0 border-l-0 border-r-0 border-b border-b-[--black] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 rounded-none"
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
                      <FormItem className="space-y-[24px] w-full">
                        <FormLabel className="heading-6-regular">
                          What is you email address?
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            {...field}
                            className="border-t-0 border-l-0 border-r-0 border-b border-b-[--black] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-[24px] w-full">
                        <FormLabel className="heading-6-regular">
                          Tell me some details.
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            disabled={loading}
                            {...field}
                            rows={5}
                            className="border-t-0 border-l-0 border-r-0 border-b border-b-[--black] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-y-[24px]">
                  <Link href="">
                    <FaDribbble className="w-[32px] h-[32px]" />
                  </Link>
                  <Link href="">
                    <FaInstagram className="w-[34px] h-[34px]" />
                  </Link>
                  <Link href="">
                    <FaXTwitter className="w-[32px] h-[32px]" />
                  </Link>
                  <Link href="mailto:evanch98@gmail.com">
                    <FaRegEnvelope className="w-[32px] h-[32px]" />
                  </Link>
                </div>
              </div>
              <Button disabled={loading} variant="normal" type="submit">
                Let's do it
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};
