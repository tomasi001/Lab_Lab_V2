import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPinnedById, UpdatePinnedInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPinned = NonNullable<EditPinnedById['pinned']>

interface PinnedFormProps {
  pinned?: EditPinnedById['pinned']
  onSave: (data: UpdatePinnedInput, id?: FormPinned['id']) => void
  error: RWGqlError
  loading: boolean
}

const PinnedForm = (props: PinnedFormProps) => {
  const onSubmit = (data: FormPinned) => {
    props.onSave(data, props?.pinned?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPinned> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.pinned?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="pinnedItem"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pinned item
        </Label>

        <TextField
          name="pinnedItem"
          defaultValue={props.pinned?.pinnedItem}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pinnedItem" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.pinned?.userId}
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

export default PinnedForm
