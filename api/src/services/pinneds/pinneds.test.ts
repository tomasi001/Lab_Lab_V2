import type { Pinned } from '@prisma/client'

import {
  pinneds,
  pinned,
  createPinned,
  updatePinned,
  deletePinned,
} from './pinneds'
import type { StandardScenario } from './pinneds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pinneds', () => {
  scenario('returns all pinneds', async (scenario: StandardScenario) => {
    const result = await pinneds()

    expect(result.length).toEqual(Object.keys(scenario.pinned).length)
  })

  scenario('returns a single pinned', async (scenario: StandardScenario) => {
    const result = await pinned({ id: scenario.pinned.one.id })

    expect(result).toEqual(scenario.pinned.one)
  })

  scenario('creates a pinned', async (scenario: StandardScenario) => {
    const result = await createPinned({
      input: {
        pinnedItem: 'String',
        userId: scenario.pinned.two.userId,
        updatedAt: '2023-03-26T20:09:53.550Z',
      },
    })

    expect(result.pinnedItem).toEqual('String')
    expect(result.userId).toEqual(scenario.pinned.two.userId)
    expect(result.updatedAt).toEqual(new Date('2023-03-26T20:09:53.550Z'))
  })

  scenario('updates a pinned', async (scenario: StandardScenario) => {
    const original = (await pinned({ id: scenario.pinned.one.id })) as Pinned
    const result = await updatePinned({
      id: original.id,
      input: { pinnedItem: 'String2' },
    })

    expect(result.pinnedItem).toEqual('String2')
  })

  scenario('deletes a pinned', async (scenario: StandardScenario) => {
    const original = (await deletePinned({
      id: scenario.pinned.one.id,
    })) as Pinned
    const result = await pinned({ id: original.id })

    expect(result).toEqual(null)
  })
})
