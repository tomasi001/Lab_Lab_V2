import { Label, TextField, FieldError } from '@redwoodjs/forms'
import { Ref } from 'react'

type TextInputProps = {
  name: string
  label: string
  ref?: Ref<HTMLInputElement>
  validation?: any
  autoComplete?: string
}

const TextInput = ({
  name,
  label,
  ref,
  validation,
  autoComplete,
}: TextInputProps) => {
  return (
    <div>
      <Label
        name={name}
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        {label}
      </Label>
      <TextField
        name={name}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        ref={ref}
        validation={validation}
        autoComplete={autoComplete}
      />
      <FieldError name={name} className="rw-field-error" />
    </div>
  )
}

export default TextInput
