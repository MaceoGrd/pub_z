import { motion } from 'framer-motion';

export default function SectionTitle({ children, align = 'left' }) {
  const isLeft = align === 'left';
  const img = isLeft ? '/images/1.png' : '/images/3.png';

  return (
    <motion.div
      initial={{ x: isLeft ? -700 : 700 }} // 🠔 Garde juste le slide
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className="relative w-screen h-[60vh] mb-6 overflow-hidden"
    >
      {/* Image collée à gauche ou droite */}
      <img
        src={img}
        alt=""
        aria-hidden="true"
        className={`absolute top-0 h-full w-5/6 object-cover z-0 ${
          isLeft ? 'left-0' : 'right-0'
        }`}
      />

      {/* Texte parfaitement centré */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
        <h2 className="text-black text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg">
          {children}
        </h2>
      </div>
    </motion.div>
  );
}
