import type { ThoughtPattern } from '@prisma/client'

import {
  thoughtPatterns,
  thoughtPattern,
  createThoughtPattern,
  updateThoughtPattern,
  deleteThoughtPattern,
} from './thoughtPatterns'
import type { StandardScenario } from './thoughtPatterns.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('thoughtPatterns', () => {
  scenario(
    'returns all thoughtPatterns',
    async (scenario: StandardScenario) => {
      const result = await thoughtPatterns()

      expect(result.length).toEqual(Object.keys(scenario.thoughtPattern).length)
    }
  )

  scenario(
    'returns a single thoughtPattern',
    async (scenario: StandardScenario) => {
      const result = await thoughtPattern({
        id: scenario.thoughtPattern.one.id,
      })

      expect(result).toEqual(scenario.thoughtPattern.one)
    }
  )

  scenario('creates a thoughtPattern', async (scenario: StandardScenario) => {
    const result = await createThoughtPattern({
      input: {
        pattern: 'String',
        userId: scenario.thoughtPattern.two.userId,
        updatedAt: '2023-03-26T20:09:40.047Z',
      },
    })

    expect(result.pattern).toEqual('String')
    expect(result.userId).toEqual(scenario.thoughtPattern.two.userId)
    expect(result.updatedAt).toEqual(new Date('2023-03-26T20:09:40.047Z'))
  })

  scenario('updates a thoughtPattern', async (scenario: StandardScenario) => {
    const original = (await thoughtPattern({
      id: scenario.thoughtPattern.one.id,
    })) as ThoughtPattern
    const result = await updateThoughtPattern({
      id: original.id,
      input: { pattern: 'String2' },
    })

    expect(result.pattern).toEqual('String2')
  })

  scenario('deletes a thoughtPattern', async (scenario: StandardScenario) => {
    const original = (await deleteThoughtPattern({
      id: scenario.thoughtPattern.one.id,
    })) as ThoughtPattern
    const result = await thoughtPattern({ id: original.id })

    expect(result).toEqual(null)
  })
})
