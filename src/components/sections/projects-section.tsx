import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.image);
            return (
              <Card key={project.title} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                {projectImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      data-ai-hint={projectImage.imageHint}
                      width={600}
                      height={400}
                      className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
