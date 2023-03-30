import type { Prisma, WordCloud } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WordCloudCreateArgs>({
  wordCloud: {
    one: {
      data: {
        updatedAt: '2023-03-26T20:09:15.133Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:15.133Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:15.133Z',
            roles: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-03-26T20:09:15.133Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:15.133Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:15.133Z',
            roles: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WordCloud, 'wordCloud'>
