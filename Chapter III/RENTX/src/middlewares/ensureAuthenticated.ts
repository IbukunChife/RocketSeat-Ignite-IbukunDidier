import { AppError } from "../errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import  { UsersRepository }  from "../modules/accounts/repositories/implementations/UsersRepository"

interface IPayload {
  sub: string;
}


export async function ensureAuthenticated (request:Request,response:Response,next:NextFunction) { 

  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError("Token missing",401);
  }

  const [,token] = authHeader.split(" ");

  try{
    const {sub: user_id } = verify(token, "a4010293ac2d6026adb4a60389977942") as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id)

    if(!user) throw new AppError("User soes not exits",401);

    next();
  }catch{
    throw new AppError("Invalid Token",401)
  }


}