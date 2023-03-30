import type { Prisma, ThoughtPattern } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThoughtPatternCreateArgs>({
  thoughtPattern: {
    one: {
      data: {
        pattern: 'String',
        updatedAt: '2023-03-26T20:09:40.055Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:40.055Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:40.055Z',
            roles: 'String',
          },
        },
      },
    },
    two: {
      data: {
        pattern: 'String',
        updatedAt: '2023-03-26T20:09:40.055Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:40.055Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:40.055Z',
            roles: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThoughtPattern, 'thoughtPattern'>
