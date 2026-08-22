import { Users, Award, Star, Link as LinkIcon } from "lucide-react";

export default function AchievementBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
      {/* Main Title */}
      <h2 className="text-center text-foreground font-bold text-lg md:text-2xl lg:text-3xl mb-2 flex items-center justify-center gap-2">
        <span>
          <span className="text-gradient">1st Position</span> — Saylani Mass IT Training 2026
        </span>
        <a
          href="https://www.facebook.com/story.php?story_fbid=122303442680153270&id=61554598103536"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View announcement post"
          className="inline-flex items-center justify-center p-1.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors align-middle"
        >
          <LinkIcon className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </h2>

      {/* Course Name */}
      <p className="text-center text-primary font-semibold text-sm md:text-base mb-4">
        Modern Web Application Development · Batch-16
      </p>

      {/* Stats Row */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-2 border border-border">
          <Users className="text-primary w-4 h-4" />
          <span className="text-foreground text-sm font-medium">
            20,000+ Students
          </span>
        </div>
        <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-2 border border-border">
          <Star className="text-primary w-4 h-4" />
          <span className="text-foreground text-sm font-medium">400 Finalists</span>
        </div>
        <div className="flex items-center gap-2 bg-secondary rounded-xl px-4 py-2 border border-border">
          <Award className="text-primary w-4 h-4" />
          <span className="text-foreground text-sm font-medium">Ranked #1</span>
        </div>
      </div>

      {/* Credential */}
      <p className="text-center text-muted-foreground text-xs mt-3">
        Issued by Saylani Welfare International Trust · Credential:
        SMIT/2026/WMA/B16/367786
      </p>
    </div>
  );
}
