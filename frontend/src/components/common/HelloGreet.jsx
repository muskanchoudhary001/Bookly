import { useEffect, useState } from "react";

const greetings = [
  { text: "Hello", emoji: "👋", color: "from-blue-500 to-indigo-600" },
  { text: "Bonjour", emoji: "👋", color: "from-green-400 to-emerald-600" },
  { text: "Namaste", emoji: "🙏", color: "from-orange-400 to-red-500" },
  { text: "Hola", emoji: "🤗", color: "from-yellow-400 to-orange-500" },
  { text: "こんにちは", emoji: "🎌", color: "from-pink-400 to-rose-600" },
  { text: "مرحبا", emoji: "🌙", color: "from-teal-400 to-cyan-600" },
];

const HelloGreet = ({ role }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = greetings[index];

  return (
    <h1 className="text-4xl font-extrabold mb-8 drop-shadow-sm flex items-center gap-3">
      
      {/* Animated Greeting Word */}
      <span
        className={`bg-gradient-to-r ${current.color}
        bg-clip-text text-transparent transition-all duration-500`}
      >
        {current.text}
      </span>

      {/* Role in Original Blue Gradient */}
      <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent">
        {role}
      </span>

      {/* Emoji Same Line */}
      <span className="animate-bounce">
        {current.emoji}
      </span>

    </h1>
  );
};

export default HelloGreet;
