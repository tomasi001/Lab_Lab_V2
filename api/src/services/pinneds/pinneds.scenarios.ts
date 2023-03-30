import type { Prisma, Pinned } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PinnedCreateArgs>({
  pinned: {
    one: {
      data: {
        pinnedItem: 'String',
        updatedAt: '2023-03-26T20:09:53.564Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:53.564Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:53.564Z',
            roles: 'String',
          },
        },
      },
    },
    two: {
      data: {
        pinnedItem: 'String',
        updatedAt: '2023-03-26T20:09:53.564Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:53.564Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:53.564Z',
            roles: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pinned, 'pinned'>
