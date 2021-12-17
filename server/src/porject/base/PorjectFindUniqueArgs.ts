import { ArgsType, Field } from "@nestjs/graphql";
import { PorjectWhereUniqueInput } from "./PorjectWhereUniqueInput";

@ArgsType()
class PorjectFindUniqueArgs {
  @Field(() => PorjectWhereUniqueInput, { nullable: false })
  where!: PorjectWhereUniqueInput;
}

export { PorjectFindUniqueArgs };
