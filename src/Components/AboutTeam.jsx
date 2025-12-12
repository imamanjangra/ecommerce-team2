import TeamCard from "./TeamCard";

export default function AboutTeam() {
  const team = [
    {
      name: "Aman Jangra",
      role: "leader",
      bio: "Full-stack problem solver who blends creative UI ideas with rock-solid engineering.",
      image:
        "https://i.ibb.co/RTcQCz5w/image.png",
    },
    {
      name: "Menon Laverne",
      role: "Co-leader",
      bio: "Creative mind shaping visuals, branding, and product experiences with a bold modern taste.",
      image:
        "https://i.ibb.co/jP43nQDQ/image.png",
    },
  ];

  return (
    <div className="w-full py-20 px-10 bg-black">
      <h2 className="text-5xl font-bold text-center">
        Meet the <span className="text-cyan-400">Team</span>
      </h2>
      <p className="text-center mt-3 text-gray-400">
        The innovators behind our work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {team.map((m, i) => (
          <TeamCard key={i} member={m} />
        ))}
      </div>
    </div>
  );
}
