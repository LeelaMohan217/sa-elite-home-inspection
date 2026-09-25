import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/prices", label: "Prices" },
  { to: "/contact", label: "Contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu on any navigation, including a tap on the page
  // you're already on.
  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex flex-col border-b transition-all duration-500 ease-out ${
        open ? "bottom-0" : ""
      } ${
        open
          ? "border-hairline bg-paper"
          : scrolled
            ? "border-hairline bg-paper shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto grid w-full max-w-7xl shrink-0 grid-cols-[auto_1fr_auto] items-center px-5 py-4 sm:px-8 lg:px-10"
      >
        {/* LEFT — Logo */}
        <div className="col-start-1 flex items-center justify-start">
          <NavLink to="/" aria-label="Akshara Elite Home Inspections home">
            <Logo className="w-[144px] sm:w-[172px]" />
          </NavLink>
        </div>

        {/* Navigation — centred in the viewport */}
        <ul className="col-start-2 hidden items-center justify-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center py-2 text-[14px] font-medium transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-stone hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA */}
        <div className="col-start-3 hidden items-center justify-end lg:flex">
          <NavLink
            to="/contact"
            className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink-800"
          >
            Book an Inspection
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="col-start-3 flex justify-end lg:hidden">
          <button
            type="button"
            className={`relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ease-in-out ${
              open
                ? "border-ink bg-ink text-paper"
                : scrolled
                  ? "border-paper/70 bg-paper/40 text-ink backdrop-blur-md"
                  : "border-ink/30 bg-paper/20 text-ink backdrop-blur-sm"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                >
                  <X size={18} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                >
                  <Menu size={18} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-1 overflow-y-auto border-t border-hairline bg-paper lg:hidden"
          >
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-auto flex h-full max-w-7xl flex-col px-5 py-4 sm:px-8"
            >
              {links.map((link) => (
                <motion.li
                  key={link.to}
                  variants={itemVariants}
                  className="border-b border-ink/10 last:border-0"
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 text-[15px] font-semibold transition-colors ${
                        isActive ? "text-ink" : "text-ink/55"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>

                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-ink transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}

              <motion.li variants={itemVariants} className="mt-auto pb-5 pt-5">
                <NavLink
                  to="/contact"
                  className="flex w-full items-center justify-center h-10 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink-800"
                >
                  Book an Inspection
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
