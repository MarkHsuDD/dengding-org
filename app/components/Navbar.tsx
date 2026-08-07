import Link from "next/link";

const navItems = [
  { label: "首頁", href: "/" },
  { label: "SFS 系統", href: "/sfs" },
  { label: "案例實績", href: "/case-study" },
  { label: "關於登鼎", href: "/about" },
  { label: "聯絡我們", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0b171a]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="回到登鼎智慧工程首頁">
          <img
            src="/DD-LOGO-small.png"
            alt="DengDing Logo"
            className="w-10 h-10 object-contain"
          />

          <div>
            <div className="text-lg font-semibold text-white">登鼎智慧工程</div>
            <div className="text-xs text-white/50">DengDing Smart ConTech</div>
          </div>
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70" aria-label="主要導覽">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-[#fbec96] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
