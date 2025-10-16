import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/data";
import { Briefcase, Check } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-28 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          Work Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-border rounded-full"></div>
          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{job.role}</CardTitle>
                    <CardDescription className="text-base">
                      {job.company} &bull; {job.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-background rounded-full border-4 border-primary flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
