import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0d0b09]"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-texture.jpg"
          alt="Текстура премиальной ЛДСП Lamarty"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09]/70 via-[#0d0b09]/70 to-[#0d0b09]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0b09] via-transparent to-[#0d0b09]/40" />
      </div>

      {/* Floating decorative particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-300/60"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-amber-300"
        >
          <span className="h-px w-10 bg-amber-400" />
          Сыктывкарский фанерный завод
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-serif text-5xl leading-[1.05] text-stone-50 sm:text-6xl lg:text-7xl"
        >
          Ламинированная ДСП
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            премиального класса
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-stone-300"
        >
          Lamarty — плиты высочайшей плотности с классом эмиссии формальдегида
          Е0,5, эксклюзивными декорами и безупречной поверхностью для мебели,
          которая служит десятилетиями.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="#decors"
            className="group relative overflow-hidden rounded-full bg-amber-400 px-8 py-4 text-sm font-medium uppercase tracking-wider text-stone-950 transition-transform duration-300 hover:scale-105"
          >
            Смотреть декоры
          </a>
          <a
            href="#specs"
            className="rounded-full border border-stone-400/30 px-8 py-4 text-sm uppercase tracking-wider text-stone-200 transition-colors duration-300 hover:border-amber-300 hover:text-amber-300"
          >
            Характеристики
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8"
        >
          {[
            { value: "Е 0,5", label: "класс эмиссии" },
            { value: "719", label: "кг/м³ плотность" },
            { value: "70+", label: "городов России" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-amber-300">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone-400 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Листайте</span>
        <div className="h-9 w-5 rounded-full border border-stone-500">
          <motion.div
            animate={{ y: [2, 14, 2], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
