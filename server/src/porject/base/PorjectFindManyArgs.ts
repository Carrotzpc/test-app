import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PorjectWhereInput } from "./PorjectWhereInput";
import { Type } from "class-transformer";
import { PorjectOrderByInput } from "./PorjectOrderByInput";

@ArgsType()
class PorjectFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PorjectWhereInput,
  })
  @Field(() => PorjectWhereInput, { nullable: true })
  @Type(() => PorjectWhereInput)
  where?: PorjectWhereInput;

  @ApiProperty({
    required: false,
    type: PorjectOrderByInput,
  })
  @Field(() => PorjectOrderByInput, { nullable: true })
  @Type(() => PorjectOrderByInput)
  orderBy?: PorjectOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PorjectFindManyArgs };
