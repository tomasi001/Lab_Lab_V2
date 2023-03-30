import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditWordById, UpdateWordInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormWord = NonNullable<EditWordById['word']>

interface WordFormProps {
  word?: EditWordById['word']
  onSave: (data: UpdateWordInput, id?: FormWord['id']) => void
  error: RWGqlError
  loading: boolean
}

const WordForm = (props: WordFormProps) => {
  const onSubmit = (data: FormWord) => {
    props.onSave(data, props?.word?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormWord> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="word"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Word
        </Label>

        <TextField
          name="word"
          defaultValue={props.word?.word}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="word" className="rw-field-error" />

        <Label
          name="rating"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rating
        </Label>

        <NumberField
          name="rating"
          defaultValue={props.word?.rating}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="rating" className="rw-field-error" />

        <Label
          name="wordCloudId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Word cloud id
        </Label>

        <NumberField
          name="wordCloudId"
          defaultValue={props.word?.wordCloudId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="wordCloudId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WordForm
