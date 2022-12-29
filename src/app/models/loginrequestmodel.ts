

export interface LoginReqModel {


  username:string,
  password:string,

}


export interface LoginResponseModel {


  token:string,
  name:string,
  email:string,
  refreshToken:string,
  expiration:string,
  username:string,
  message:string,
  statusCode:number,

}
