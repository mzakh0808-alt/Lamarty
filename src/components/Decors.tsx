import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const decors = [
  {
    name: "Дуб Крафт",
    code: "H1145",
    image: "/images/decor-oak.jpg",
    desc: "Тёплый натуральный декор с выраженной текстурой древесных волокон.",
  },
  {
    name: "Орех Террра",
    code: "K017",
    image: "/images/decor-walnut.jpg",
    desc: "Глубокий шоколадный тон премиального ореха для статусной мебели.",
  },
  {
    name: "Бетон Графит",
    code: "F186",
    image: "/images/decor-concrete.jpg",
    desc: "Актуальный индустриальный декор под натуральный камень.",
  },
  {
    name: "Альпийский Белый",
    code: "W980",
    image: "/images/decor-white.jpg",
    desc: "Чистый глянцевый белый — универсальная база для современных кухонь.",
  },
];

export default function Decors() {
  const [active, setActive] = useState(0);

  return (
    <section id="decors" className="relative bg-[#13100d] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-amber-300">
              <span className="h-px w-10 bg-amber-400" />
              Коллекция декоров
            </p>
            <h2 className="font-serif text-4xl text-stone-50 sm:text-5xl">
              Более 100 фактур и&nbsp;оттенков
            </h2>
          </div>
          <p className="max-w-md text-stone-400">
            От натуральных древесных рисунков до фантазийных и каменных
            декоров — 9 видов тиснений для любого стиля интерьера.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Large preview */}
          <div className="relative overflow-hidden rounded-3xl lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative aspect-[4/3] w-full"
              >
                <img
                  src={decors[active].image}
                  alt={decors[active].name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="mb-1 text-xs uppercase tracking-[0.3em] text-amber-300">
                    Декор {decors[active].code}
                  </p>
                  <h3 className="font-serif text-3xl text-stone-50">
                    {decors[active].name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-stone-300">
                    {decors[active].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail list */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-1">
            {decors.map((d, i) => (
              <motion.button
                key={d.name}
                onClick={() => setActive(i)}
                whileHover={{ x: 6 }}
                className={`group flex items-center gap-4 overflow-hidden rounded-2xl border p-3 text-left transition-colors duration-300 ${
                  active === i
                    ? "border-amber-400 bg-amber-400/10"
                    : "border-white/10 bg-white/[0.02] hover:border-amber-400/40"
                }`}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                />
                <div>
                  <p
                    className={`font-serif text-lg ${active === i ? "text-amber-300" : "text-stone-100"}`}
                  >
                    {d.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-stone-500">
                    {d.code}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
