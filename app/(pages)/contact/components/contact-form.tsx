"use client";

import Button from "@/components/common/button";
import { Container } from "@/components/common/container";
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
    } catch (error) {
      toast.error("Something went wrong. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-[128px]">
      <div className="w-full px-[104px] text-[--black] flex items-center justify-center gap-x-[128px]">
        <div className="w-[590px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-y-[96px] items-center justify-center"
            >
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
                        {...field}
                        rows={5}
                        className="border-t-0 border-l-0 border-r-0 border-b border-b-[--black] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="normal" type="submit">
                Let's do it
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};
