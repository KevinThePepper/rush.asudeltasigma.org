import { User } from "../../interfaces"

/** Dummy user data. */
export const mockUserManagement: User[] = [
  { id: "101", name: "Hajar Boughoula", receivedBid: true, preferenced: true, accessLevel: 4, status: "active", online: true, socialMedia: {facebook: "https://google.com"} },
  { id: "102", name: "Malia Valenueva", receivedBid: true, preferenced: true, accessLevel: 1, status: "active", online: true, socialMedia: {facebook: "https://google.com", instagram: "https://github.com", behance: "https://behance.com" } },
  { id: "103", name: "Logan Schmitt", receivedBid: true, preferenced: true, accessLevel: 1, status: "active", online: false },
  { id: "104", name: "Aaliyah Khan", receivedBid: true, preferenced: true, accessLevel: 1, status: "active", online: true },
  { id: "105", name: "Kate Ferreira", receivedBid: true, preferenced: true, accessLevel: 2, status: "active", online: false },
  { id: "106", name: "Justine Contreras", receivedBid: true, preferenced: true, accessLevel: 2, status: "active", online: false },
  { id: "107", name: "Alaya Walton", receivedBid: false, preferenced: true, accessLevel: 1, status: "active", online: true },
  { id: "108", name: "Jenna Fiel", receivedBid: false, preferenced: false, accessLevel: 1, status: "active", online: false },
  { id: "109", name: "Klaudia Auz", receivedBid: false, preferenced: false, accessLevel: 1, status: "inactive", online: true },
  { id: "110", name: "Kelli S", receivedBid: false, preferenced: false, accessLevel: 3, status: "active", online: true },
  { id: "111", name: "Nika Scot", receivedBid: false, preferenced: false, accessLevel: 1, status: "inactive", online: false },
  { id: "112", name: "Sandi Romero", receivedBid: false, preferenced: false, accessLevel: 3, status: "resigned", online: true }
]

export const emptyUser: User = {
  id: "0", name: "", receivedBid: true, preferenced: true
}
