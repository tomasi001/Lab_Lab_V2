import type { ComponentMeta } from '@storybook/react'

import VerifyPage from './VerifyPage'

export const generated = () => {
  return <VerifyPage />
}

export default {
  title: 'Pages/VerifyPage',
  component: VerifyPage,
} as ComponentMeta<typeof VerifyPage>
