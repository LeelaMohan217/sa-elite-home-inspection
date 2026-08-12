import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/Mobile-App-Icon.svg";

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
        alt=""
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span className="leading-tight">
        <span className="block text-sm font-extrabold tracking-[0.02em] text-slate-900">
          SA ELITE
        </span>
        <span className="block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">
          Home Inspections
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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 transition-all duration-500 sm:px-8 lg:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* LEFT — Logo */}
        <div className="col-start-1 flex items-center justify-start">
          <NavLink to="/" aria-label="SA Elite Home Inspection home">
            <Logo />
          </NavLink>
        </div>

        {/* CENTER — Navigation */}
        <ul className="col-start-2 hidden items-center justify-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `group relative flex items-center py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-700 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>

                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-slate-700 transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA */}
        <div className="col-start-3 hidden items-center justify-end md:flex">
          <NavLink
            to="/contact"
            className="group flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-800 transition-all duration-300 hover:bg-slate-800 hover:text-white"
          >
            <span>Book Inspection</span>
            <ArrowUpRight
              size={13}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="col-start-3 flex justify-end md:hidden">
          <button
            type="button"
            className={`relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "border-slate-700 bg-slate-800 text-white"
                : scrolled
                  ? "border-white/70 bg-white/40 text-slate-700 backdrop-blur-md"
                  : "border-slate-300/70 bg-white/20 text-slate-700 backdrop-blur-sm"
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
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-white/60 bg-white/85 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-auto max-w-7xl px-5 py-4 sm:px-8"
            >
              {links.map((link) => (
                <motion.li
                  key={link.to}
                  variants={itemVariants}
                  className="border-b border-slate-200/70 last:border-0"
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 text-[15px] font-semibold transition-colors ${
                        isActive ? "text-slate-900" : "text-slate-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>

                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-slate-700 transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}

              <motion.li variants={itemVariants} className="pt-5">
                <NavLink
                  to="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-slate-900"
                >
                  <span>Book Inspection</span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.4}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
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
