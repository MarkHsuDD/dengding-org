export default function Navbar() {
  const navItems = [
    { label: "首頁", href: "/" },
    { label: "SFS 系統", href: "/sfs" },
    { label: "案例實績", href: "#" },
    { label: "關於登鼎", href: "#" },
    { label: "聯絡我們", href: "#" },
  ];

  return (
    <header className="border-b border-white/10 bg-[#0b171a]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">

        <a href="/" className="flex items-center gap-3">

          <img
            src="/DD-LOGO-small.png"
            alt="DengDing Logo"
            className="w-10 h-10 object-contain"
          />

          <div>
            <div className="text-lg font-semibold">
              登鼎智慧工程
            </div>

            <div className="text-xs text-white/50">
              DengDing Smart ConTech
            </div>
          </div>

        </a>

        <nav className="flex gap-6 text-sm text-white/70">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#fbec96] transition"
            >
              {item.label}
            </a>
          ))}

        </nav>

      </div>
    </header>
  );
}