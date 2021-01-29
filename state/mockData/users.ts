import { User } from "../../interfaces"

/** Dummy user data. */
export const mockUserManagement: User[] = [
  { id: "101", name: "Hajar Boughoula", receivedBid: true, preferenced: true },
  { id: "102", name: "Malia Valenueva", receivedBid: true, preferenced: true },
  { id: "103", name: "Logan Schmitt", receivedBid: true, preferenced: true },
  { id: "104", name: "Aaliyah Khan", receivedBid: true, preferenced: true },
  { id: "105", name: "Kate Ferreira", receivedBid: true, preferenced: true },
  { id: "106", name: "Justine Contreras", receivedBid: true, preferenced: true },
  { id: "107", name: "Alaya Walton", receivedBid: false, preferenced: true },
  { id: "108", name: "Jenna Fiel", receivedBid: false, preferenced: false },
  { id: "109", name: "Klaudia Auz", receivedBid: false, preferenced: false },
  { id: "110", name: "Kelli S", receivedBid: false, preferenced: false },
  { id: "111", name: "Nika Scot", receivedBid: false, preferenced: false },
  { id: "112", name: "Sandi Romero", receivedBid: false, preferenced: false }
]

export const emptyUser: User = {
  id: "0", name: "", receivedBid: true, preferenced: true
}
