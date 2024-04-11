import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from 'src/member/entity/member.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>
  ){}

  async signUp(signUpDto: SignUpDto){
    if(!await this.memberRepository.existsBy({ email: signUpDto.email })){ 
      this.memberRepository.save({
        username: signUpDto.username,
        email: signUpDto.email,
        password: signUpDto.password
      })
    } else throw new BadRequestException 
  }
}
