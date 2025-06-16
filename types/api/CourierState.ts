export interface CourierState {
  System?: string;
  StateId?: number;
  Date: string;
  Time: string;
  Text?: string;
  Creator?: string;
  Comment?: string;
  /** ISO date */
  CreationTime: string;
  Latitude?: string;
  Longitude?: string;
  Satellites?: string;
  GPSTime?: string;
}
