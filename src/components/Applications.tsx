import { motion } from "framer-motion";

const uses = [
  { title: "Кухонные гарнитуры", icon: "🍽️" },
  { title: "Корпусная мебель", icon: "🗄️" },
  { title: "Мебель для детских садов", icon: "🧸" },
  { title: "Офисные интерьеры", icon: "🏢" },
  { title: "Шкафы-купе", icon: "🚪" },
  { title: "Торговое оборудование", icon: "🛍️" },
];

export default function Applications() {
  return (
    <section id="applications" className="relative overflow-hidden bg-[#13100d] py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative order-2 overflow-hidden rounded-3xl lg:order-1"
        >
          <img
            src="/images/kitchen-interior.jpg"
            alt="Кухня из ЛДСП Lamarty"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13100d] via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0d0b09]/80 p-5 backdrop-blur"
          >
            <p className="font-serif text-lg text-amber-300">
              Безопасно для дома
            </p>
            <p className="mt-1 text-sm text-stone-300">
              Класс Е0,5 подходит для кухонь, спален и детских комнат.
            </p>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-amber-300">
              <span className="h-px w-10 bg-amber-400" />
              Применение
            </p>
            <h2 className="mb-6 font-serif text-4xl text-stone-50 sm:text-5xl">
              Для мебели, которая живёт рядом с вами
            </h2>
            <p className="mb-10 max-w-xl text-stone-400">
              Плиты Lamarty используют ведущие мебельные фабрики России и
              СНГ — от жилых интерьеров до коммерческих и социальных
              объектов.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {uses.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-amber-400/50"
              >
                <span className="text-2xl">{u.icon}</span>
                <span className="text-sm text-stone-200">{u.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
