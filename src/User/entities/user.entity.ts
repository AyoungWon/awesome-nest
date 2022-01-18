// import { ApiProperty } from '@nestjs/swagger';
// import { Type } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @IsString()
  @PrimaryGeneratedColumn('uuid', { comment: 'uuid' })
  id: string;

  @UpdateDateColumn({ comment: 'last update datetime' })
  updatedAt: Date;

  @CreateDateColumn({ comment: 'insert datetime' })
  createdAt: Date;

  @Column({ length: 20 })
  @IsString()
  @MaxLength(20)
  name: string;
}
