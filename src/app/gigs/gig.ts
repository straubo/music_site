import { Band } from "./band";

export interface Gig {
  date: Date;
  name: String;
  otherActs?: Band[];
  description?: String;
  location: String;
  price?: String;
}
