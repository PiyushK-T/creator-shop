export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-[90vh] bg-[#FFF7ED] flex justify-center px-10 py-20"
    >
      <div className="w-full max-w-[1400px]">

        {/* Section Heading (left-aligned but section centered) */}
        <h2 className="text-6xl font-bold mb-16">
          About Me
        </h2>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/src/assets/images/about.png"
              alt="About"
              className="w-full max-w-[600px] h-[600px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h3 className="text-4xl font-semibold mb-6">Introduction</h3>
            <p className="text-2xl leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, nisl et ultricies cursus, velit nunc placerat metus,
              eget gravida urna lacus a justo. Replace this with your real intro.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
