import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/aboutme", label: "Over mezelf" },
  { href: "/blogspage", label: "Blogs" },
];

const NavBarBlog = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">Pension Architects Journal</span>
          <span className="brand-sub">Steven Van Cleemput</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => {
            const active =
              link.href === "/"
                ? router.pathname === "/" || router.pathname === "/landingpage"
                : router.pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default NavBarBlog;
