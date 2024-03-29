import {instance, ResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum} from './api'


type MeResponseDataType = {
  id: number, email: string, login: string
}

type LoginResponseDataType = {
userId: number
}

export const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post<ResponseType<LoginResponseDataType, ResultCodeForCaptchaEnum | ResultCodeEnum>>("auth/login", { email, password, rememberMe, captcha }).then(res => res.data);
  },
  logout() {
    return instance.delete("auth/login");
  },
};