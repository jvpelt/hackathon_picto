import React from 'react'
import {useDropzone} from 'react-dropzone'
import RootRef from '@material-ui/core/RootRef'
import {Paper} from '@material-ui/core'

export const UploadPicto = (): JSX.Element => {
  const {getRootProps, getInputProps} = useDropzone()
  const {ref, ...rootProps} = getRootProps()

  return (
    <RootRef rootRef={ref}>
      <Paper {...rootProps}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </Paper>
    </RootRef>
  )
}
