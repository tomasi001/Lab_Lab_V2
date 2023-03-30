import type { Prisma, CommonNarrative } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommonNarrativeCreateArgs>({
  commonNarrative: {
    one: {
      data: {
        narrative: 'String',
        updatedAt: '2023-03-26T20:09:26.862Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:26.862Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:26.862Z',
            roles: 'String',
          },
        },
      },
    },
    two: {
      data: {
        narrative: 'String',
        updatedAt: '2023-03-26T20:09:26.862Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:26.862Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:26.862Z',
            roles: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CommonNarrative, 'commonNarrative'>
