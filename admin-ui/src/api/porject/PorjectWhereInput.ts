import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PorjectWhereInput = {
  desc?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
