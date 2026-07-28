import { Terminal, MessageCircle } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  { label: "About", href: "#why-takegeeks" },
  { label: "Program", href: "#workflow" },
  { label: "Apply", href: "#apply" },
  { label: "Contact", href: "#faq" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/takegeeks/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/takegeeks/",
    icon: FaInstagram,
  },
  {
    label: "Discord",
    href: "https://discord.gg/fuU8TDFj",
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
           <div className="flex items-center">
              <Image
                src="/logo/Logo-large.png"
                alt="TakeGeeks"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
              />
           </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Software Engineering Apprenticeship
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Links
            </h4>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Social
            </h4>

            <ul className="mt-4 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8">
          <p className="font-mono text-sm text-slate-500">
            &gt; Stop learning from tutorials. Start building software that
            matters.
          </p>

          <p className="mt-4 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} TakeGeeks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}