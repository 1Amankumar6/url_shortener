import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    navigate(token ? "/dashboard" : "/login");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4 bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-16 lg:pt-20">
        {/* Left Hero Content */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
          >
            <span className="text-indigo-600">LinkPulse</span> — Simplified URL
            Shortening & Analytics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 mt-5 text-base sm:text-lg max-w-lg"
          >
            Generate short, memorable links and track clicks in real time. Share
            effortlessly across platforms and optimize your link strategy with{" "}
            <strong>LinkPulse</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <button
              onClick={dashBoardNavigateHandler}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:scale-[1.03] transition-transform duration-200"
            >
              Manage Links
            </button>
            <button
              onClick={dashBoardNavigateHandler}
              className="border border-indigo-600 text-indigo-600 font-semibold py-3 px-6 rounded-xl hover:bg-indigo-50 transition-colors duration-200"
            >
              Create Short Link
            </button>
          </motion.div>
        </div>

        {/* Right Hero Image */}
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-[450px] md:w-[500px] rounded-xl object-cover shadow-lg"
            src="/images/img2.avif"
            alt="LinkPulse Illustration"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10"
        >
          Why Teams & Individuals Trust{" "}
          <span className="text-indigo-600">LinkPulse</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-12">
          <Card
            title="Simple URL Shortening"
            desc="Create short, memorable URLs in just a few clicks. Our intuitive interface makes it quick and hassle-free."
          />
          <Card
            title="Powerful Analytics"
            desc="Track clicks, traffic sources, and engagement to optimize your strategy and grow your reach."
          />
          <Card
            title="Enhanced Security"
            desc="All links are protected with advanced encryption to keep your data safe and reliable."
          />
          <Card
            title="Fast & Reliable"
            desc="Experience lightning-fast redirects with high uptime, ensuring a seamless experience for users."
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
