import { motion } from "framer-motion";

export default function MenuSection({ title, items }) {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-white border-b border-zinc-600 mb-4 pb-2">
        {title}
      </h2>

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
      </ul>
    </motion.section>
  );
}
