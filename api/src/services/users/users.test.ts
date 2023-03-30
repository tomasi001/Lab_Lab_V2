import type { User } from '@prisma/client'

import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        accountStatus: 'String',
        updatedAt: '2023-03-26T20:08:37.478Z',
        hashedPassword: 'String',
        salt: 'String',
        resetToken: 'String',
        resetTokenExpiresAt: '2023-03-26T20:08:37.478Z',
        roles: 'String',
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.accountStatus).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-03-26T20:08:37.478Z'))
    expect(result.hashedPassword).toEqual('String')
    expect(result.salt).toEqual('String')
    expect(result.resetToken).toEqual('String')
    expect(result.resetTokenExpiresAt).toEqual(
      new Date('2023-03-26T20:08:37.478Z')
    )
    expect(result.roles).toEqual('String')
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = (await user({ id: scenario.user.one.id })) as User
    const result = await updateUser({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = (await deleteUser({ id: scenario.user.one.id })) as User
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
