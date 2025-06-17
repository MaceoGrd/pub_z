import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formatPrice = (price) => {
  price = Number(price);
  return Number.isInteger(price) ? `${price}€` : `${price.toFixed(2)}€`;
};

function SubSection({ subTitle, items }) {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold underline text-zinc-300 mb-2">{subTitle}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="border-b border-dashed border-zinc-700 pb-1 flex flex-col sm:flex-row sm:justify-between text-sm text-zinc-100"
          >
            <span className="font-medium">{item.nom}</span>

            {item.formats ? (
              <span className="text-right text-zinc-300 text-xs sm:text-sm">
                {Object.entries(item.formats)
                  .map(([size, price]) => `${size}: ${formatPrice(price)}`)
                  .join(" / ")}
              </span>
            ) : item.prix ? (
              <span className="text-right text-zinc-300">
                {formatPrice(item.prix)}
              </span>
            ) : null}

            {item.description && (
              <span className="italic text-xs text-zinc-400 mt-1 sm:mt-0">
                {item.description}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MenuSection({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const isSubCategory = typeof items === "object" && !Array.isArray(items);

  return (
    <section className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-3xl font-semibold text-white mb-4 pb-2 flex justify-between items-center"
      >
        {title}
        <span className="text-lg">{isOpen ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {isSubCategory ? (
              Object.entries(items).map(([subTitle, subItems], i) => (
                <SubSection key={i} subTitle={subTitle} items={subItems} />
              ))
            ) : (
              <SubSection subTitle="" items={items} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
