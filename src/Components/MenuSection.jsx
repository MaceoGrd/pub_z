import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formatPrice = (price) => {
  price = Number(price);
  return Number.isInteger(price) ? `${price}€` : `${price.toFixed(2)}€`;
};

function SubSection({ subTitle, items, happyHourState }) {
  const isHappyHour = happyHourState?.state === "now";

  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold underline text-zinc-300 mb-2">{subTitle}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => {
          const hasPromo = item.prixHP !== undefined;

          return (
            <li
              key={i}
              className="border-b border-dashed border-zinc-700 pb-1 flex flex-col sm:flex-row sm:justify-between text-sm text-zinc-100"
            >
              {/* Nom + description côte à côte */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-medium">{item.nom}</span>
                {item.description && (
                  <span className="italic text-xs text-zinc-400 sm:ml-2">
                    {item.description}
                  </span>
                )}
              </div>

              {/* Prix ou formats */}
              <div className="text-right text-xs sm:text-sm space-x-2">
                {/* Cas avec formats */}
                {item.formats ? (
                  <span>
                    {Object.entries(item.formats).map(([size, price], j, arr) => {
                      const promoPrice = item.prixHPFormats?.[size];
                      const isPromo = promoPrice !== undefined;

                      return (
                        <span key={size}>
                          {isPromo ? (
                            isHappyHour ? (
                              <>
                                <span className="line-through text-zinc-400">
                                  {size}: {formatPrice(price)}
                                </span>{" "}
                                <span className="text-green-400">
                                  {formatPrice(promoPrice)}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-zinc-300">
                                  {size}: {formatPrice(price)}
                                </span>{" "}
                                <span className="text-red-400">
                                  {formatPrice(promoPrice)}
                                </span>
                              </>
                            )
                          ) : (
                            <span className="text-zinc-300">
                              {size}: {formatPrice(price)}
                            </span>
                          )}
                          {j < arr.length - 1 && <span> / </span>}
                        </span>
                      );
                    })}
                  </span>
                ) : hasPromo ? (
                  <>
                    {isHappyHour ? (
                      <>
                        <span className="line-through text-zinc-400">
                          {formatPrice(item.prix)}
                        </span>
                        <span className="text-green-400">
                          {formatPrice(item.prixHP)}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-zinc-300">
                          {formatPrice(item.prix)}
                        </span>
                        <span className="text-red-400 ml-2">
                          {formatPrice(item.prixHP)}
                        </span>
                      </>
                    )}
                  </>
                ) : item.prix ? (
                  <span className="text-zinc-300">
                    {formatPrice(item.prix)}
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function MenuSection({ title, items, happyHourState }) {
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
                <SubSection
                  key={i}
                  subTitle={subTitle}
                  items={subItems}
                  happyHourState={happyHourState}
                />
              ))
            ) : (
              <SubSection
                subTitle=""
                items={items}
                happyHourState={happyHourState}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
