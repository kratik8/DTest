import { motion } from "framer-motion";

const Button = ({ children, className = "" }) => {
  return (
    <button className={`bg-white text-black px-4 py-2 rounded-xl ${className}`}>
      {children}
    </button>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">MyBrand</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
        <Button className="rounded-2xl">Get Started</Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Build Something Amazing 🚀
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Create beautiful, fast and modern web apps using React and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="rounded-2xl px-6 py-3">Start Now</Button>
          <Button variant="outline" className="rounded-2xl px-6 py-3 text-black">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { title: "Fast", desc: "Lightning fast performance." },
          { title: "Modern", desc: "Built with latest tech." },
          { title: "Responsive", desc: "Works on all devices." }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
        <Button className="rounded-2xl px-8 py-4 text-lg">Join Now</Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400">
        © 2026 MyBrand. All rights reserved.
      </footer>
    </div>
  );
}