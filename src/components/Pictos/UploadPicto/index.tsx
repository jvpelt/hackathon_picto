/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, Fragment} from 'react'
import i18n from 'i18next'
import {DropzoneArea} from 'material-ui-dropzone'
import {useDispatch} from 'react-redux'
import {savePicto} from 'redux-logic/pictos'
import {v4} from 'uuid'
import {Button} from '@material-ui/core'

export const UploadPicto = (): JSX.Element => {
  const dispatch = useDispatch()
  const [key, setKey] = useState(1)
  const [compFiles, setFiles] = useState<File[]>([])

  const resizeAndUpload = (file: File): void => {
    const filerdr = new FileReader()

    filerdr.onload = (e): void => {
      const img = new Image()

      img.onload = (): void => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = 128
        canvas.height = canvas.width * (img.height / img.width)
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)

        // SEND THIS DATA TO WHEREVER YOU NEED IT
        const data = canvas.toDataURL('image/png')
        dispatch(savePicto({id: v4(), data, title: file.name}))
      }
      img.src = e.target?.result as string
    }
    filerdr.readAsDataURL(file)
  }
  const handleChange = (files: File[]): void => {
    setFiles(files)
  }
  return (
    <Fragment>
      <DropzoneArea key={key} dropzoneText={i18n.t('pictos:dropzone')} filesLimit={10} showPreviewsInDropzone={false} onChange={handleChange} />
      <Button fullWidth variant="outlined" color="primary" onClick={(): void => compFiles.forEach(file => resizeAndUpload(file))}>
        {i18n.t('pictos:save')}
      </Button>
    </Fragment>
  )
}
