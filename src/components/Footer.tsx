export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0b09] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left lg:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 bg-gradient-to-br from-amber-400/20 to-amber-700/10">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-amber-300 to-amber-600" />
          </span>
          <span className="font-serif text-xl tracking-[0.18em] text-stone-50">
            LAMARTY
          </span>
        </div>
        <p className="max-w-md text-sm text-stone-500">
          Товарный знак ООО «Сыктывкарский фанерный завод». Концептуальный
          редизайн сайта, выполнен в демонстрационных целях.
        </p>
        <p className="text-sm text-stone-600">
          © {new Date().getFullYear()} Lamarty. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
