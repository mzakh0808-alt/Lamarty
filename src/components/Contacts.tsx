import { useState } from "react";
import { motion } from "framer-motion";

const cities = [
  "Сыктывкар",
  "Москва",
  "Санкт-Петербург",
  "Нижний Новгород",
  "Казань",
  "Екатеринбург",
  "Краснодар",
  "Новосибирск",
];

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="relative overflow-hidden bg-[#0d0b09] py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
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
            Где купить
          </p>
          <h2 className="font-serif text-4xl text-stone-50 sm:text-5xl">
            Представлены более чем в 70 городах
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex flex-wrap gap-3">
              {cities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 transition-colors hover:border-amber-400/50 hover:text-amber-300"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-sm uppercase tracking-wider text-stone-500">
                    Производство
                  </p>
                  <p className="text-stone-100">
                    г. Сыктывкар, Республика Коми
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-sm uppercase tracking-wider text-stone-500">
                    Отдел продаж
                  </p>
                  <p className="text-stone-100">+7 (8212) 00-00-00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-sm uppercase tracking-wider text-stone-500">
                    Электронная почта
                  </p>
                  <p className="text-stone-100">sales@lamarty.ru</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/5 to-transparent p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-16 text-center"
              >
                <span className="mb-4 text-5xl">✅</span>
                <h3 className="font-serif text-2xl text-stone-50">
                  Спасибо, {name || "друг"}!
                </h3>
                <p className="mt-2 text-stone-400">
                  Наш менеджер свяжется с вами в ближайшее время.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="mb-2 font-serif text-2xl text-stone-50">
                  Запросить прайс-лист
                </h3>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-stone-500">
                    Имя
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full rounded-xl border border-white/10 bg-[#0d0b09] px-4 py-3 text-stone-100 outline-none transition-colors focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-stone-500">
                    Телефон или e-mail
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="+7 ___ ___-__-__"
                    className="w-full rounded-xl border border-white/10 bg-[#0d0b09] px-4 py-3 text-stone-100 outline-none transition-colors focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-stone-500">
                    Сообщение
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Интересует коллекция декоров..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0b09] px-4 py-3 text-stone-100 outline-none transition-colors focus:border-amber-400"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-full bg-amber-400 py-4 text-sm font-medium uppercase tracking-wider text-stone-950 transition-colors hover:bg-amber-300"
                >
                  Отправить заявку
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
