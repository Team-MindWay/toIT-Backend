import { IsEmail, IsNotEmpty, min } from "class-validator"

export class SignUpDto {
    @IsNotEmpty()
    username: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}
