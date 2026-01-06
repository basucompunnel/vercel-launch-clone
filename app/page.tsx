"use client";

import { motion } from "framer-motion";
import Header from "./component/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Coming soon
        </motion.h1>
      </main>
    </>
  );
}
