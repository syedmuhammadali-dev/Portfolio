import { Trophy, Users, Award, Star } from "lucide-react";

export default function AchievementBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
      {/* Top Badge */}
      {/* <div className="flex items-center justify-center gap-2 mb-3">
        <Trophy className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
        <span className="text-yellow-400 font-bold text-sm md:text-base tracking-wider uppercase">
          Achievement Unlocked
        </span>
        <Trophy className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
      </div> */}

      {/* Main Title */}
      <h2 className="text-center text-white font-bold text-lg md:text-2xl lg:text-3xl mb-2">
        🥇 1st Position — Saylani Mass IT Training 2026
      </h2>

      {/* Course Name */}
      <p className="text-center text-yellow-300 font-semibold text-sm md:text-base mb-4">
        Modern Web Application Development · Batch-16
      </p>

      {/* Stats Row */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 border border-yellow-500/20">
          <Users className="text-yellow-400 w-4 h-4" />
          <span className="text-white text-sm font-medium">
            20,000+ Students
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 border border-yellow-500/20">
          <Star className="text-yellow-400 w-4 h-4" />
          <span className="text-white text-sm font-medium">400 Finalists</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 border border-yellow-500/20">
          <Award className="text-yellow-400 w-4 h-4" />
          <span className="text-white text-sm font-medium">Ranked #1</span>
        </div>
      </div>

      {/* Credential */}
      <p className="text-center text-gray-400 text-xs mt-3">
        Issued by Saylani Welfare International Trust · Credential:
        SMIT/2026/WMA/B16/367786
      </p>
    </div>
  );
}
