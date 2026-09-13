import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.svg";

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

function Logo() {
  return (
    <span className="group flex items-center gap-2.5">
      <img
        src={logo}
        alt="SA Elite Home Inspection"
        className="h-[33.75px] w-[33.75px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />

      <span className="flex flex-col leading-tight">
        <span className="text-sm font-extrabold tracking-[0.02em] text-black">
          AKSHARA ELITE
        </span>
        <span className="text-[11px] font-semibold tracking-[0.08em] text-black">
          HOME INSPECTIONS
        </span>
      </span>
    </span>
  );
}

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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
          ? "border-hairline bg-white"
          : scrolled
            ? "border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto grid w-full max-w-7xl shrink-0 grid-cols-[auto_1fr_auto] items-center px-5 py-4 sm:px-8 lg:px-10"
      >
        {/* LEFT — Logo */}
        <div className="col-start-1 flex items-center justify-start">
          <NavLink to="/" aria-label="SA Elite Home Inspection home">
            <Logo />
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
                  `flex items-center py-2 text-[15px] font-semibold tracking-[0.01em] transition-colors duration-200 ${
                    isActive ? "text-black" : "text-black/55 hover:text-black"
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
            className="rounded-[3px] border border-black bg-black px-4 py-2.5 text-[13px] font-semibold tracking-[0.01em] text-white transition-colors duration-500 ease-in-out hover:bg-black/80"
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
                ? "border-black bg-black text-white"
                : scrolled
                  ? "border-white/70 bg-white/40 text-black backdrop-blur-md"
                  : "border-black/30 bg-white/20 text-black backdrop-blur-sm"
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
            className="flex-1 overflow-y-auto border-t border-hairline bg-white lg:hidden"
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
                  className="border-b border-black/10 last:border-0"
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 text-[15px] font-semibold transition-colors ${
                        isActive ? "text-black" : "text-black/55"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>

                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-black transition-opacity ${
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
                  className="flex w-full items-center justify-center rounded-[3px] bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-500 ease-in-out hover:-translate-y-0.5 hover:bg-black/85 hover:shadow-cta active:translate-y-0 active:duration-150"
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
