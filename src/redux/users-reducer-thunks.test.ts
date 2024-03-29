import { ResponseType, ResultCodeEnum } from "../api/api"
import userAPI from "../api/users-api"
import { actions, follow, unfollow } from "./users-reducer"

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
   dispatchMock.mockClear()
   getStateMock.mockClear()
})

jest.mock('../api/users-api')

const userAPIMock = userAPI as jest.Mocked<typeof userAPI>

const apiResponseMock: ResponseType = {
   resultCode: ResultCodeEnum.Success,
   //resultCode: ResultCodeEnum.Error,
   messages: ['test 1'],
   data: {}
}



test('success follow thunk', async () => {

   userAPIMock.follow.mockReturnValue(
      Promise.resolve(apiResponseMock))

   const thunk = follow(1)

   await thunk(dispatchMock, getStateMock, {})

   expect(dispatchMock).toBeCalledTimes(3)
   expect(dispatchMock).toHaveBeenNthCalledWith(
      1, actions.toggleFollowingProgress(true, 1))
   expect(dispatchMock).toHaveBeenNthCalledWith(
      2, actions.followSuccess(1))
   expect(dispatchMock).toHaveBeenNthCalledWith(
      3, actions.toggleFollowingProgress(false, 1))

   userAPIMock.follow.mockClear()
})


test('success unfollow thunk', async () => {

   userAPIMock.unfollow.mockReturnValue(
      Promise.resolve(apiResponseMock))

   const thunk = unfollow(1)

   await thunk(dispatchMock, getStateMock, {})

   expect(dispatchMock).toBeCalledTimes(3)
   expect(dispatchMock).toHaveBeenNthCalledWith(
      1, actions.toggleFollowingProgress(true, 1))
   expect(dispatchMock).toHaveBeenNthCalledWith(
      2, actions.unfollowSuccess(1))
   expect(dispatchMock).toHaveBeenNthCalledWith(
      3, actions.toggleFollowingProgress(false, 1))

   userAPIMock.unfollow.mockClear()
})