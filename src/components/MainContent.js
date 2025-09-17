export default function MainContent() {
  return (
    <div className="flex flex-col max-w-md space-y-6 md:space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Want to Turn Social Media Into a Profitable Career?
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 drop-shadow-lg">
        Discover your way to success with Fametonic:
      </h2>
      <ul className="space-y-4 text-gray-300 text-sm md:text-base list-none">
        {[
          "Start growing your influence right away—no waiting required!",
          "Create viral TikToks and Reels step by step with easy-to-follow lessons",
          "Use a Personal AI Worker to boost your content",
          "Learn from expert-led courses designed for aspiring influencers",
        ].map((text, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-yellow-400">✨</span> {text}
          </li>
        ))}
      </ul>
      <button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-md font-semibold text-white max-w-max shadow-lg transition">
        GET STARTED &gt;
      </button>
      <p className="text-xs text-gray-500 mt-1">
        1-minute quiz for personalized Insights
      </p>
    </div>
  );
}
