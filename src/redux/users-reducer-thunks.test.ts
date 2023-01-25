import { ResponseType, ResultCodeEnum } from "../api/api"
import userAPI from "../api/users-api"
import { follow } from "./users-reducer"

jest.mock("../api/users-api")
const userAPIMock = userAPI


const result: ResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {}
}

// @ts-ignore
userAPIMock.follow.mockReturnValue(Promise.resolve(result))

// test('none', async ()=>{
//   const thunk = follow(1)

//   const dispatchMock = jest.fn()

//   // @ts-ignore
//   await thunk(dispatchMock)

//   expect(dispatchMock).toBeCalledTimes(3)
// })