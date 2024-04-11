import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navMenus = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Explore",
    path: "/explore",
  },
  {
    id: 3,
    name: "Apponitment",
    path: "/appointment",
  },
  {
    id: 4,
    name: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="p-8 shadow-sm">
      <div className="flex justify-between items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {navMenus.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary/70 cursor-pointer hover:scale-105 transition-all ease-in-out"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Link href="/sign-up" className="bg-indigo-500 rounded-md px-4 py-2 text-primary-foreground">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
