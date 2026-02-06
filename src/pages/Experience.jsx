import React from "react";
import { BedDouble, Utensils, Waves, MapPin, Star, Wifi, Dumbbell, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Royal Luxury Rooms",
    desc: "Ultra‑spacious rooms with handcrafted interiors, smart automation, king‑size beds, and breathtaking skyline or ocean views.",
    icon: BedDouble,
  },
  {
    id: 2,
    title: "Signature Fine Dining",
    desc: "Award‑winning chefs, curated global cuisines, candle‑light dinners, and unforgettable flavors.",
    icon: Utensils,
  },
  {
    id: 3,
    title: "Infinity Pool & Spa",
    desc: "Temperature‑controlled infinity pool, luxury spa therapies, and total relaxation.",
    icon: Waves,
  },
  {
    id: 4,
    title: "Iconic Location",
    desc: "Steps away from landmarks, beaches, nightlife, and business districts.",
    icon: MapPin,
  },
  {
    id: 5,
    title: "Seamless Connectivity",
    desc: "Ultra‑fast Wi‑Fi, private workspaces, and business‑friendly services.",
    icon: Wifi,
  },
  {
    id: 6,
    title: "Elite Fitness & Wellness",
    desc: "State‑of‑the‑art gym, yoga sessions, personal trainers, and wellness programs.",
    icon: Dumbbell,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    rating: 5,
    text: "This hotel redefines luxury. Every detail feels premium and thoughtfully designed.",
  },
  {
    id: 2,
    name: "Emily Carter",
    rating: 5,
    text: "From the rooms to the dining, everything was flawless. Truly unforgettable.",
  },
];

const ExperiencePage = () => {
  return (
    <div className="w-full  text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('Hotel.jpg')] bg-cover bg-no-repeat ">
        <div className=" " />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-white font-bold  text-3xl mb-6 ">
            <Sparkles size={16} /> Premium Hotel Experience
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Experience <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Luxury</span>
            <br /> Like Never Before
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto">
            Where elegance meets comfort. Crafted stays, personalized services, and moments you’ll remember forever.
          </p>
        </motion.div>
      </section>

      {/* Experiences */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">World‑Class Experiences</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Designed to delight your senses and elevate every moment of your stay.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                whileHover={{ y: -10 }}
                key={item.id}
                className="p-10 rounded-3xl border border-white/ bg-gray-300 hover:bg-white/10 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Icon size={30} className="text-black" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-black">{item.title}</h3>
                <p className="mt-3 text-black leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Guest Stories</h2>
            <p className="text-gray-400">Real experiences from our valued guests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={t.id}
                className="p-10 rounded-3xl bg-white/5 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 text-lg mb-6">“{t.text}”</p>
                <span className="font-semibold">— {t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6 bg-[url('OIP.jpg')] bg-cover bg-no-repeat ">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Your Luxury Stay Awaits</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Book now and step into a world of elegance, comfort, and unforgettable hospitality.
        </p>
        <button className=" px-12 py-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold text-lg hover:scale-105 transition">
          Book Your Experience
        </button>
      </section>
    </div>
  );
};

export default ExperiencePage;
