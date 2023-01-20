import axios from "axios";


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