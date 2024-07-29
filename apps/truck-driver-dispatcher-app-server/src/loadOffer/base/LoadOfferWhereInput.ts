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
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DispatcherWhereUniqueInput } from "../../dispatcher/base/DispatcherWhereUniqueInput";
import { DriverWhereUniqueInput } from "../../driver/base/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { EnumLoadOfferStatus } from "./EnumLoadOfferStatus";

@InputType()
class LoadOfferWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

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
  dispatcher?: DispatcherWhereUniqueInput;

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
  driver?: DriverWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumLoadOfferStatus,
  })
  @IsEnum(EnumLoadOfferStatus)
  @IsOptional()
  @Field(() => EnumLoadOfferStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { LoadOfferWhereInput as LoadOfferWhereInput };