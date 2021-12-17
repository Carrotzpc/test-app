import { Porject as TPorject } from "../api/porject/Porject";

export const PORJECT_TITLE_FIELD = "name";

export const PorjectTitle = (record: TPorject): string => {
  return record.name || record.id;
};
