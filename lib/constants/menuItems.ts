import { MenuItem } from "../interfaces/MenuItem";

export const menuItems: MenuItem[] = [
  { label: "Shop", href: "/"},
  { label: "Below KES 100", href: "/below-100", badge: true },
  { label: "Flash Sale", href: "/flash-deals", highlight: true },
  { label: "Electronics", href: "/electronics" },
  { label: "Fashion", href: "/fashion" },
  { label: "Household", href: "/household" },
  { label: "Kitchen", href: "/kitchen" },
  { label: "Personal Care", href: "/personal-care" },
  { label: "Affordable Essentials", href: "/essentials" },
  { label: "Imports / Exclusive Items", href: "/imports", highlight: true },
];
