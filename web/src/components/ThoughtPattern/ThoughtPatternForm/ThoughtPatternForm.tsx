import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditThoughtPatternById,
  UpdateThoughtPatternInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormThoughtPattern = NonNullable<EditThoughtPatternById['thoughtPattern']>

interface ThoughtPatternFormProps {
  thoughtPattern?: EditThoughtPatternById['thoughtPattern']
  onSave: (
    data: UpdateThoughtPatternInput,
    id?: FormThoughtPattern['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const ThoughtPatternForm = (props: ThoughtPatternFormProps) => {
  const onSubmit = (data: FormThoughtPattern) => {
    props.onSave(data, props?.thoughtPattern?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormThoughtPattern> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.thoughtPattern?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="pattern"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pattern
        </Label>

        <TextField
          name="pattern"
          defaultValue={props.thoughtPattern?.pattern}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pattern" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.thoughtPattern?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ThoughtPatternForm
