import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        accountStatus: 'String',
        updatedAt: '2023-03-26T20:08:37.489Z',
        hashedPassword: 'String',
        salt: 'String',
        resetToken: 'String',
        resetTokenExpiresAt: '2023-03-26T20:08:37.489Z',
        roles: 'String',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        accountStatus: 'String',
        updatedAt: '2023-03-26T20:08:37.489Z',
        hashedPassword: 'String',
        salt: 'String',
        resetToken: 'String',
        resetTokenExpiresAt: '2023-03-26T20:08:37.489Z',
        roles: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
