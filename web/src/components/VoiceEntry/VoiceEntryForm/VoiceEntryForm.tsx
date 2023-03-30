import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditVoiceEntryById, UpdateVoiceEntryInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormVoiceEntry = NonNullable<EditVoiceEntryById['voiceEntry']>

interface VoiceEntryFormProps {
  voiceEntry?: EditVoiceEntryById['voiceEntry']
  onSave: (data: UpdateVoiceEntryInput, id?: FormVoiceEntry['id']) => void
  error: RWGqlError
  loading: boolean
}

const VoiceEntryForm = (props: VoiceEntryFormProps) => {
  const onSubmit = (data: FormVoiceEntry) => {
    props.onSave(data, props?.voiceEntry?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormVoiceEntry> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.voiceEntry?.title}
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
          defaultValue={props.voiceEntry?.entry}
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
          defaultValue={props.voiceEntry?.userId}
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

export default VoiceEntryForm
