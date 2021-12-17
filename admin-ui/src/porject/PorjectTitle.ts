import { Porject as TPorject } from "../api/porject/Porject";

export const PORJECT_TITLE_FIELD = "id";

export const PorjectTitle = (record: TPorject): string => {
  return record.id || record.id;
};
