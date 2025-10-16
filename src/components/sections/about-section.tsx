import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { about } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.summary}
            </p>
          </div>
          <div className="space-y-8">
            {about.strengths.map((strength) => (
              <div key={strength.name} className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-md flex items-center justify-center">
                  <strength.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{strength.name}</h3>
                  <p className="text-muted-foreground">
                    I excel in {strength.name.toLowerCase()}, delivering robust and efficient solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
