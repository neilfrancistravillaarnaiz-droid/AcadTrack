export type Achievement = {
  id: number;
  name: string;
  role: string;
  title: string;
  category: string;
  year: string;
  description: string;
  badge: string;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    name: "Neil Francis Arnaiz",
    role: "Computer Programming Student",
    title: "Best Web System Developer",
    category: "Technology",
    year: "2026",
    badge: "🏆",
    description:
      "Recognized for developing a modern web-based system using React, TypeScript, and Supabase.",
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Student Leader",
    title: "Outstanding Leadership Award",
    category: "Leadership",
    year: "2026",
    badge: "🎖️",
    description:
      "Awarded for excellent leadership, service, and commitment to student development.",
  },
  {
    id: 3,
    name: "John Dela Cruz",
    role: "IT Student",
    title: "Programming Competition Finalist",
    category: "Competition",
    year: "2025",
    badge: "💻",
    description:
      "Reached the final round of a programming competition through problem-solving and coding skills.",
  },
];