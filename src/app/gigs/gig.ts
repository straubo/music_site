import { Band } from "./band";

export interface Gig {
  date: Date;
  name: String;
  location: String;
  otherActs?: Band[];
  description?: String;
  price?: String;
}
