import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";

import { UserInterface } from "./user.interface";
import { RegisterUserDto } from "./register/register.user.dto";
import { USER_MODEL_PROVIDER } from "../../constants";

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER)
    private readonly userModel: Model<UserInterface>
  ) {}

  async create(registerUserDto: RegisterUserDto): Promise<UserInterface> {
    const createdUser = new this.userModel(registerUserDto);
    const alreadyExistingUser = await this.getUserByEmail(
      registerUserDto.email
    );

    if (alreadyExistingUser !== null) {
      throw new Error("User with this email already exists");
    }

    return await createdUser.save();
  }
  async getUserByEmail(email: string): Promise<UserInterface> {
    return await this.userModel.findOne({ email });
  }

  async getUserBySession(session: string): Promise<UserInterface> {
    return await this.userModel.findOne({ session });
  }

  async updateUsersSession(email: string, newSession: string): Promise<void> {
    await this.userModel.findOneAndUpdate(
      { email },
      {
        $set: { session: newSession }
      }
    );
  }
}
