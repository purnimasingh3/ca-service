"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Financial Experts" },
  { value: 200, suffix: "+", label: "Successful Clients" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-white border-y border-slate-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: idx * .15 }}
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                )}
              </h2>

              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}