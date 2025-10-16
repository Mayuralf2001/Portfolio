import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-12">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="text-lg px-6 py-3 border-primary/50 text-primary-foreground bg-primary/80 transition-all hover:bg-primary hover:scale-105 cursor-default"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
