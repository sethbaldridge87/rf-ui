import { getOrdinalSuffix } from "@/app/utils/formatDate";

export const eventData = {
  name: "RainFocus Summit",
  city: "Lehi",
  state: "UT",
  month: "December",
  day: getOrdinalSuffix(15),
};

export type EventData = Readonly<typeof eventData>;