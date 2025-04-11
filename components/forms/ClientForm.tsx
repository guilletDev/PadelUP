"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre de usuario debe tener al menos 2 caracteres.",
  }),
})

const ClientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="text-[32px] font-bold md:text-[36px]">Bienvenido! 👋</h1>
            <p className="text-gray-400">Inicia tu reserva</p>

        </section>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Rafael Nadal .." {...field} />
              </FormControl>
              <FormDescription>
                Este es tu nombre para mostrar público
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Empezar</Button>
      </form>
    </Form>
  )
}


export default ClientForm