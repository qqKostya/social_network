import axios from "axios";
import { UsersType } from "../types/types";


export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "40aef231-21d5-4575-a9dd-3fdaf97a7991",
  },
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UsersType>
  totalCount: number
  error: null | string
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}