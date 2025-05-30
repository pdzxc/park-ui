'use client'
import { Trash2Icon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { FileUpload } from '~/components/ui/file-upload'
import { IconButton } from '~/components/ui/icon-button'

export const Demo = (props: FileUpload.RootProps) => {
  return (
    <FileUpload.Root maxFiles={3} {...props}>
      <FileUpload.Label>Drop your files here</FileUpload.Label>
      <FileUpload.Dropzone>
        <FileUpload.Trigger asChild>
          <Button size="sm">Open Dialog</Button>
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file, id) => (
              <FileUpload.Item key={id} file={file}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger asChild>
                  <IconButton variant="link" size="sm">
                    <Trash2Icon />
                  </IconButton>
                </FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  )
}
