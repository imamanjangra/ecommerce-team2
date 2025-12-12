    export default function Aboutcomp() {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex flex-col justify-center px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
        <div className="absolute inset-0 bg-black/50">

        </div>
        <div className="z-50 w-full">

      <h1 className="text-6xl font-bold max-w-4xl">
        Crafting Digital <span className="text-cyan-400">Experiences</span> Since
        2023
      </h1>
      <p className="text-xl mt-6 max-w-2xl">
        Born in India, built for the world. We design digital experiences that
        blend creativity with technology.
      </p>
        </div>
    </div>
  );
}
