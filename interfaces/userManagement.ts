import { UrlObject } from "url";

export interface IUserStatus {
  status?: "active" | "inactive" | "resigned";
};

export interface IUserOnline {
  online?: boolean;
};

export interface IUserSocialMedia {
  facebook?: string | UrlObject;
  instagram?: string | UrlObject;
  twitter?: string | UrlObject;
  linkedin?: string | UrlObject;
  slack?: string | UrlObject;
  github?: string | UrlObject;
  medium?: string | UrlObject;
  behance?: string | UrlObject;
}

export interface User extends IUserStatus, IUserOnline {
  id: string;
  name: string;
  receivedBid: boolean;
  preferenced: boolean;
  accessLevel?: 0 | 1 | 2 | 3 | 4;
  socialMedia?: IUserSocialMedia;
};