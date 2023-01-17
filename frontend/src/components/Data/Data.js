// Sidebar imports
import {
  UilEstate,
  UilBooks,
  UilBookReader,
  UilClipboardAlt,
  UilSwatchbook,
  UilBookOpen,
  UilSignout,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link: "/",
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
