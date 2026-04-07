import { motion } from "framer-motion";

const Button = ({ children, className = "" }) => (
  <button className={`px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition ${className}`}>
    {children}
  </button>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[150px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* Navbar */}
      <nav className="relative flex justify-between items-center p-6 max-w-7xl mx-auto z-10">
        <h1 className="text-2xl font-bold tracking-widest">⚡ NOVA</h1>
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>
        <Button>Launch</Button>
      </nav>

      {/* Hero */}
      <section className="relative text-center py-24 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          The Future of
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Web Experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          Experience blazing fast, futuristic UI with smooth animations and cutting-edge design.
        </motion.p>

        <div className="mt-10 flex justify-center gap-6">
          <Button>Get Started</Button>
          <Button className="bg-white text-black">Explore</Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 z-10">
        {[
          { title: "⚡ Speed", desc: "Ultra-fast performance with modern tech." },
          { title: "🎨 Design", desc: "Stunning UI with smooth animations." },
          { title: "🔒 Secure", desc: "Top-notch security built-in." }
        ].map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About */}
      <section id="about" className="text-center py-20 px-6 z-10 relative">
        <h2 className="text-4xl font-bold mb-4">Built for the Next Generation</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          This landing page combines futuristic visuals, gradients, and motion to create a unique first impression.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 relative z-10">
        © 2026 NOVA. All rights reserved.
      </footer>
    </div>
  );
}