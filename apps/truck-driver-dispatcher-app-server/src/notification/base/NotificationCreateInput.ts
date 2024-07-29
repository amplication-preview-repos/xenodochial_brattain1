/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DispatcherWhereUniqueInput } from "../../dispatcher/base/DispatcherWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { DriverWhereUniqueInput } from "../../driver/base/DriverWhereUniqueInput";
import { EnumNotificationTypeField } from "./EnumNotificationTypeField";

@InputType()
class NotificationCreateInput {
  @ApiProperty({
    required: false,
    type: () => DispatcherWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DispatcherWhereUniqueInput)
  @IsOptional()
  @Field(() => DispatcherWhereUniqueInput, {
    nullable: true,
  })
  dispatcher?: DispatcherWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DriverWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DriverWhereUniqueInput)
  @IsOptional()
  @Field(() => DriverWhereUniqueInput, {
    nullable: true,
  })
  driver?: DriverWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  sentAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumNotificationTypeField,
  })
  @IsEnum(EnumNotificationTypeField)
  @IsOptional()
  @Field(() => EnumNotificationTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { NotificationCreateInput as NotificationCreateInput };
