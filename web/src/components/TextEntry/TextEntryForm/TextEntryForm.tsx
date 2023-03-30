import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTextEntryById, UpdateTextEntryInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormTextEntry = NonNullable<EditTextEntryById['textEntry']>

interface TextEntryFormProps {
  textEntry?: EditTextEntryById['textEntry']
  onSave: (data: UpdateTextEntryInput, id?: FormTextEntry['id']) => void
  error: RWGqlError
  loading: boolean
}

const TextEntryForm = (props: TextEntryFormProps) => {
  const onSubmit = (data: FormTextEntry) => {
    props.onSave(data, props?.textEntry?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTextEntry> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.textEntry?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="entry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Entry
        </Label>

        <TextField
          name="entry"
          defaultValue={props.textEntry?.entry}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="entry" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.textEntry?.userId}
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

export default TextEntryForm
