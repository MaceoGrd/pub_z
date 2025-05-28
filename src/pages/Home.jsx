import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="p-6 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">Bienvenue au Bar XYZ</h1>
        <p className="mt-4 text-lg">Un lieu convivial pour se retrouver autour d'un verre.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold">Où nous trouver ?</h2>
        <p className="mt-2">123 rue des bars, 75000 Paris</p>
        <iframe
          className="mt-4 w-full max-w-md mx-auto h-64 rounded"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}