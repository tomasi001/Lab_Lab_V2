import type { Prisma, TextEntry } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TextEntryCreateArgs>({
  textEntry: {
    one: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T20:08:59.118Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:08:59.118Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:08:59.118Z',
            roles: 'String',
          },
        },
      },
    },
    two: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T20:08:59.119Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:08:59.119Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:08:59.119Z',
            roles: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TextEntry, 'textEntry'>
