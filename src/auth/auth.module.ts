import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/member/entity/member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Member])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
