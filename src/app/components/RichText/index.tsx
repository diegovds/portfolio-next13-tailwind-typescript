import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="font-semibold text-zinc-50">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="flex list-inside list-disc flex-col gap-1 pl-2 text-zinc-400">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="text-zinc-100 underline decoration-zinc-300/35 underline-offset-4 transition-colors hover:text-zinc-50 hover:decoration-zinc-100"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}

export default RichText
