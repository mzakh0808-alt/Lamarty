import { motion, type Variants } from "framer-motion";

const advantages = [
  {
    icon: "🛡️",
    title: "Класс Е 0,5",
    text: "Самый низкий уровень эмиссии формальдегида среди ЛДСП — безопасно для кухонь и детских комнат.",
  },
  {
    icon: "⚖️",
    title: "Высокая плотность",
    text: "719 кг/м³ — плита отлично держит крепёж, саморезы и фурнитуру долгие годы без сколов.",
  },
  {
    icon: "🌿",
    title: "Равномерная структура",
    text: "Берёзовая и хвойная щепа без коры распределена равномерно — никаких переходов слоёв при распиле.",
  },
  {
    icon: "✨",
    title: "Гладкая поверхность",
    text: "Шлифовка до 20 мкм исключает эффект серебристости пор и даёт идеально гладкое покрытие.",
  },
  {
    icon: "🎨",
    title: "Эксклюзивные декоры",
    text: "70% декораций коллекции уникальны — однотонные, фантазийные, древесные и каменные текстуры.",
  },
  {
    icon: "🏭",
    title: "Собственное производство",
    text: "Более 300 000 м³ ЛДСП в год на современных линиях ламинирования в Сыктывкаре.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Advantages() {
  return (
    <section id="advantages" className="relative bg-[#0d0b09] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-amber-300">
            <span className="h-px w-10 bg-amber-400" />
            Преимущества
          </p>
          <h2 className="font-serif text-4xl text-stone-50 sm:text-5xl">
            Почему мебельщики выбирают Lamarty
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {advantages.map((a) => (
            <motion.div
              variants={item}
              key={a.title}
              whileHover={{ backgroundColor: "rgba(251,191,36,0.06)" }}
              className="group relative bg-[#13100d] p-9 transition-colors duration-300"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/30 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:border-amber-400">
                {a.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-stone-50">
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-400">
                {a.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
