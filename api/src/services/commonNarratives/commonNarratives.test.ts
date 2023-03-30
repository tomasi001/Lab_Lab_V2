import type { CommonNarrative } from '@prisma/client'

import {
  commonNarratives,
  commonNarrative,
  createCommonNarrative,
  updateCommonNarrative,
  deleteCommonNarrative,
} from './commonNarratives'
import type { StandardScenario } from './commonNarratives.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('commonNarratives', () => {
  scenario(
    'returns all commonNarratives',
    async (scenario: StandardScenario) => {
      const result = await commonNarratives()

      expect(result.length).toEqual(
        Object.keys(scenario.commonNarrative).length
      )
    }
  )

  scenario(
    'returns a single commonNarrative',
    async (scenario: StandardScenario) => {
      const result = await commonNarrative({
        id: scenario.commonNarrative.one.id,
      })

      expect(result).toEqual(scenario.commonNarrative.one)
    }
  )

  scenario('creates a commonNarrative', async (scenario: StandardScenario) => {
    const result = await createCommonNarrative({
      input: {
        narrative: 'String',
        userId: scenario.commonNarrative.two.userId,
        updatedAt: '2023-03-26T20:09:26.852Z',
      },
    })

    expect(result.narrative).toEqual('String')
    expect(result.userId).toEqual(scenario.commonNarrative.two.userId)
    expect(result.updatedAt).toEqual(new Date('2023-03-26T20:09:26.852Z'))
  })

  scenario('updates a commonNarrative', async (scenario: StandardScenario) => {
    const original = (await commonNarrative({
      id: scenario.commonNarrative.one.id,
    })) as CommonNarrative
    const result = await updateCommonNarrative({
      id: original.id,
      input: { narrative: 'String2' },
    })

    expect(result.narrative).toEqual('String2')
  })

  scenario('deletes a commonNarrative', async (scenario: StandardScenario) => {
    const original = (await deleteCommonNarrative({
      id: scenario.commonNarrative.one.id,
    })) as CommonNarrative
    const result = await commonNarrative({ id: original.id })

    expect(result).toEqual(null)
  })
})
