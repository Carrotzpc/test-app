import { ArgsType, Field } from "@nestjs/graphql";
import { PorjectCreateInput } from "./PorjectCreateInput";

@ArgsType()
class CreatePorjectArgs {
  @Field(() => PorjectCreateInput, { nullable: false })
  data!: PorjectCreateInput;
}

export { CreatePorjectArgs };
