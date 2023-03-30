// const PasswordInput = () => {
//   return (
//     <div>
//       <h2>{'PasswordInput'}</h2>
//       <p>{'Find me in ./web/src/components/PasswordInput/PasswordInput.tsx'}</p>
//     </div>
//   )
// }

// export default PasswordInput

import { Label, FieldError, PasswordField } from '@redwoodjs/forms'

type PasswordInputProps = {
  name: string
  label: string
  validation?: any
  autoComplete?: string
}

const PasswordInput = ({
  name,
  label,
  validation,
  autoComplete,
}: PasswordInputProps) => {
  return (
    <div>
      <Label
        name={name}
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        {label}
      </Label>
      <PasswordField
        name={name}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={validation}
        autoComplete={autoComplete}
      />
      <FieldError name={name} className="rw-field-error" />
    </div>
  )
}

export default PasswordInput
