import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuSection({ title, items }) {
  const [isOpen, setIsOpen] = useState(false); // État d'ouverture

  return (
    <section className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-2xl font-bold text-white border-b border-zinc-600 mb-2 pb-2 flex justify-between items-center"
      >
        {title}
        <span className="text-lg">{isOpen ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {items.map((item, i) => (
              <li
                key={i}
                className="border-b border-dashed border-zinc-700 pb-1 flex flex-col sm:flex-row sm:justify-between text-sm text-zinc-100"
              >
                <span className="font-medium">{item.nom}</span>

                {item.formats ? (
                  <span className="text-right text-zinc-300 text-xs sm:text-sm">
                    {Object.entries(item.formats)
                      .map(([size, price]) => `${size}: ${price}€`)
                      .join(" / ")}
                  </span>
                ) : item.prix ? (
                  <span className="text-right text-zinc-300">{item.prix}€</span>
                ) : null}

                {item.description && (
                  <span className="italic text-xs text-zinc-400 mt-1 sm:mt-0">
                    {item.description}
                  </span>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}
