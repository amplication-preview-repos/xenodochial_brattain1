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
import { ValidateNested, IsOptional, IsEnum, IsBoolean } from "class-validator";
import { Type } from "class-transformer";
import { EnumComplianceDocumentDocumentType } from "./EnumComplianceDocumentDocumentType";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { DriverWhereUniqueInput } from "../../driver/base/DriverWhereUniqueInput";

@InputType()
class ComplianceDocumentCreateInput {
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
    enum: EnumComplianceDocumentDocumentType,
  })
  @IsEnum(EnumComplianceDocumentDocumentType)
  @IsOptional()
  @Field(() => EnumComplianceDocumentDocumentType, {
    nullable: true,
  })
  documentType?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  documentUrl?: InputJsonValue;

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
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  verified?: boolean | null;
}

export { ComplianceDocumentCreateInput as ComplianceDocumentCreateInput };
