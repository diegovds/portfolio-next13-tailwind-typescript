import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="font-medium text-gray-50">{children}</b>
        ),
      }}
    />
  )
}

export default RichText
