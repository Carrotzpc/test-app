import { ArgsType, Field } from "@nestjs/graphql";
import { PorjectWhereUniqueInput } from "./PorjectWhereUniqueInput";

@ArgsType()
class DeletePorjectArgs {
  @Field(() => PorjectWhereUniqueInput, { nullable: false })
  where!: PorjectWhereUniqueInput;
}

export { DeletePorjectArgs };
