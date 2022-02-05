import { User } from "./user";

export type ProximityAlertTriggered = {
  traveler: User;
  watcher: User;
  distance: number;
};
