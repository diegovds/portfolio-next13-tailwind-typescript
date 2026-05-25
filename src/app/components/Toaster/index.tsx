'use client'

import { Toaster as ToasterProvider } from 'react-hot-toast'

const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: '#18181b',
            border: '1px solid rgba(255,255,255,0.12)',
            color: '#fafafa',
          },
          iconTheme: {
            primary: '#fafafa',
            secondary: '#18181b',
          },
        },
        error: {
          style: {
            background: '#18181b',
            border: '1px solid rgba(248,113,113,0.35)',
            color: '#fafafa',
          },
          iconTheme: {
            primary: '#f87171',
            secondary: '#18181b',
          },
        },
      }}
    />
  )
}

export default Toaster
