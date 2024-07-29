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
import { ComplianceDocumentUpdateManyWithoutDispatchersInput } from "./ComplianceDocumentUpdateManyWithoutDispatchersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { LoadOfferUpdateManyWithoutDispatchersInput } from "./LoadOfferUpdateManyWithoutDispatchersInput";
import { MessageUpdateManyWithoutDispatchersInput } from "./MessageUpdateManyWithoutDispatchersInput";
import { NotificationUpdateManyWithoutDispatchersInput } from "./NotificationUpdateManyWithoutDispatchersInput";
import { PaymentUpdateManyWithoutDispatchersInput } from "./PaymentUpdateManyWithoutDispatchersInput";

@InputType()
class DispatcherUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ComplianceDocumentUpdateManyWithoutDispatchersInput,
  })
  @ValidateNested()
  @Type(() => ComplianceDocumentUpdateManyWithoutDispatchersInput)
  @IsOptional()
  @Field(() => ComplianceDocumentUpdateManyWithoutDispatchersInput, {
    nullable: true,
  })
  complianceDocuments?: ComplianceDocumentUpdateManyWithoutDispatchersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => LoadOfferUpdateManyWithoutDispatchersInput,
  })
  @ValidateNested()
  @Type(() => LoadOfferUpdateManyWithoutDispatchersInput)
  @IsOptional()
  @Field(() => LoadOfferUpdateManyWithoutDispatchersInput, {
    nullable: true,
  })
  loadOffers?: LoadOfferUpdateManyWithoutDispatchersInput;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutDispatchersInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutDispatchersInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutDispatchersInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutDispatchersInput;

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
  name?: string | null;

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
  nationalId?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationUpdateManyWithoutDispatchersInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutDispatchersInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutDispatchersInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutDispatchersInput;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutDispatchersInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutDispatchersInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutDispatchersInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutDispatchersInput;

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
  phone?: string | null;
}

export { DispatcherUpdateInput as DispatcherUpdateInput };
