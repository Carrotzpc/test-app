import { ArgsType, Field } from "@nestjs/graphql";
import { PorjectWhereUniqueInput } from "./PorjectWhereUniqueInput";
import { PorjectUpdateInput } from "./PorjectUpdateInput";

@ArgsType()
class UpdatePorjectArgs {
  @Field(() => PorjectWhereUniqueInput, { nullable: false })
  where!: PorjectWhereUniqueInput;
  @Field(() => PorjectUpdateInput, { nullable: false })
  data!: PorjectUpdateInput;
}

export { UpdatePorjectArgs };
