'use client'

import { fadeUpAnimation } from '@/libs/animations'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { motion } from 'framer-motion'
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
      className="relative flex items-center justify-center overflow-hidden border-t border-zinc-100/10 bg-[linear-gradient(145deg,#070709,#10131a_54%,#111113)] px-6 py-20 md:py-32"
    >
      <div className="via-zinc-300/35 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
      <div className="mx-auto grid w-full max-w-5xl items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="md:sticky md:top-28"
        />

        <motion.form
          className="flex w-full flex-col gap-4 rounded-lg border border-zinc-100/10 bg-[linear-gradient(145deg,rgba(30,30,34,0.72),rgba(8,10,14,0.86))] p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="ring-zinc-300/45 focus:border-zinc-300/45 h-14 w-full rounded-md border border-zinc-100/10 bg-zinc-950/80 p-4 text-zinc-50 outline-none transition-all placeholder:text-zinc-600 focus:ring-2"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="ring-zinc-300/45 focus:border-zinc-300/45 h-14 w-full rounded-md border border-zinc-100/10 bg-zinc-950/80 p-4 text-zinc-50 outline-none transition-all placeholder:text-zinc-600 focus:ring-2"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="ring-zinc-300/45 focus:border-zinc-300/45 h-[150px] w-full resize-none rounded-md border border-zinc-100/10 bg-zinc-950/80 p-4 text-zinc-50 outline-none transition-all placeholder:text-zinc-600 focus:ring-2"
            maxLength={500}
            {...register('message')}
          />

          <div className="relative mt-4 w-max">
            <Button className="relative z-[2]" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-zinc-100 opacity-10 blur-2xl" />
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm
