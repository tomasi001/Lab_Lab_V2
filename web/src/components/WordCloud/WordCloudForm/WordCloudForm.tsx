import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditWordCloudById, UpdateWordCloudInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormWordCloud = NonNullable<EditWordCloudById['wordCloud']>

interface WordCloudFormProps {
  wordCloud?: EditWordCloudById['wordCloud']
  onSave: (data: UpdateWordCloudInput, id?: FormWordCloud['id']) => void
  error: RWGqlError
  loading: boolean
}

const WordCloudForm = (props: WordCloudFormProps) => {
  const onSubmit = (data: FormWordCloud) => {
    props.onSave(data, props?.wordCloud?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormWordCloud> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.wordCloud?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.wordCloud?.userId}
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

export default WordCloudForm
