import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300
                 rounded-xl p-6 flex flex-col gap-3 cursor-pointer"
    >
      <h2 className="text-slate-900 text-xl font-semibold">{title}</h2>
      <p className="text-slate-600 text-sm">{desc}</p>
    </motion.div>
  );
};

export default Card;
