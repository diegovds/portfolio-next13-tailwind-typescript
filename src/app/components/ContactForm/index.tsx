'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { z } from 'zod'
import Button from '../Button'
import SectionTitle from '../SectionTitle'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form
          className="mt-12 flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="focus: h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 outline-none ring-emerald-600 placeholder:text-gray-400 focus:ring-2"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="focus: h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 outline-none ring-emerald-600 placeholder:text-gray-400 focus:ring-2"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="focus: h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 outline-none ring-emerald-600 placeholder:text-gray-400 focus:ring-2 "
            maxLength={500}
            {...register('message')}
          />

          <Button
            className="mx-auto mt-6 w-max shadow-button"
            disabled={isSubmitting}
          >
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
