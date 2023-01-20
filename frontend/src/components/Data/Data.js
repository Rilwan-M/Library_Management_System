// Sidebar imports
import {
  UilEstate,
  UilBooks,
  UilBookReader,
  UilSwatchbook,
  UilBookOpen,
  UilSignout,
} from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link: "dashboard",
  },
  {
    icon: UilBooks,
    heading: "Book Details",
    link: "books",
  },
  {
    icon: UilBookReader,
    heading: "Book Readers",
    link: "users",
  },
  {
    icon: UilBookOpen,
    heading: "Add a Book",
    link: "addbook",
  },
  {
    icon: UilSwatchbook,
    heading: "Checkout Books",
    link: "checkout",
  },
  {
    icon: UilSignout,
    heading: "Sign Out",
    link: "signout",
  },
];
