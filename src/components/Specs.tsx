import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const specs = [
  { to: 719, suffix: "", label: "кг/м³", desc: "Плотность плиты" },
  { to: 20, suffix: "", label: "мкм", desc: "Шероховатость поверхности" },
  { to: 0.5, suffix: "", label: "класс Е", desc: "Эмиссия формальдегида", decimals: 1 },
  { to: 100, suffix: "+", label: "декоров", desc: "В коллекции" },
  { to: 9, suffix: "", label: "тиснений", desc: "Фактур поверхности" },
  { to: 300, suffix: " 000", label: "м³/год", desc: "Объём производства" },
];

const formats = [
  { label: "Формат", value: "2750 × 1830 мм" },
  { label: "Толщина", value: "10, 16, 18, 22, 25, 26, 38 мм" },
  { label: "Сорт поверхности", value: "1 (высший)" },
  { label: "Влажность плиты", value: "5–7%" },
  { label: "Допуск по толщине", value: "± 0.3 мм" },
  { label: "Сырьё", value: "70% берёза / 30% хвоя" },
];

export default function Specs() {
  return (
    <section id="specs" className="relative bg-[#0d0b09] py-28">
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
            Технические характеристики
          </p>
          <h2 className="font-serif text-4xl text-stone-50 sm:text-5xl">
            Качество, проверенное цифрами
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {specs.map((s, i) => (
            <motion.div
              key={s.desc}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 text-center"
            >
              <p className="font-serif text-4xl text-amber-300 sm:text-5xl">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-1 text-sm text-stone-300">{s.label}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-stone-500">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {formats.map((f) => (
            <div key={f.label} className="bg-[#161310] p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                {f.label}
              </p>
              <p className="mt-2 font-serif text-xl text-stone-100">
                {f.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
