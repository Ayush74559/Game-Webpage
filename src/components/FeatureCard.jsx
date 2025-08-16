export default function FeatureCard({ title, description, icon, color, features = [], index = 0 }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden" style={{ animationDelay: `${index * 90}ms` }}>
      {/* Card */}
      <div className="relative bg-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 group-hover:border-purple-500/40 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
        {/* Icon */}
        <div className={`mb-5 w-16 h-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-3xl shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-white/10`}>
          {icon}
        </div>

        {/* Title & description */}
        <h3 className={`text-2xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Feature chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {features.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-200 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 10.435a1 1 0 111.414-1.414l3.01 3.01 6.657-6.657a1 1 0 011.333-.081z" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
