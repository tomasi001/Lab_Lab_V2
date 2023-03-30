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
  EditCommonNarrativeById,
  UpdateCommonNarrativeInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCommonNarrative = NonNullable<
  EditCommonNarrativeById['commonNarrative']
>

interface CommonNarrativeFormProps {
  commonNarrative?: EditCommonNarrativeById['commonNarrative']
  onSave: (
    data: UpdateCommonNarrativeInput,
    id?: FormCommonNarrative['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const CommonNarrativeForm = (props: CommonNarrativeFormProps) => {
  const onSubmit = (data: FormCommonNarrative) => {
    props.onSave(data, props?.commonNarrative?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCommonNarrative> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.commonNarrative?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="narrative"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Narrative
        </Label>

        <TextField
          name="narrative"
          defaultValue={props.commonNarrative?.narrative}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="narrative" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.commonNarrative?.userId}
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

export default CommonNarrativeForm
