import Link from "next/link";

import IMDb from "./icons/Imdb";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";

const links = [
  {
    href: "https://www.instagram.com/caramariee/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/cara-lehman-7621a5163/",
    icon: LinkedIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.imdb.com/name/nm10593245/",
    icon: IMDb,
    label: "IMDb",
  },
];

export function SocialLinks() {
  return (
    <div className="mt-12 flex items-center justify-center gap-6">
      {links.map(({ href, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
}
