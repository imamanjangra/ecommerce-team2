export default function TeamCard({ member }) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center">
      <img
        src={member.image}
        className="w-56 h-56 object-cover rounded-2xl mb-6"
      />
      <h3 className="text-2xl font-semibold">{member.name}</h3>
      <p className="text-cyan-400">{member.role}</p>
      <p className="text-gray-400 text-center mt-3">{member.bio}</p>
    </div>
  );
}
