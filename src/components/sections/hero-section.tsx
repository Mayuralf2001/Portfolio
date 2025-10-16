import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full bg-cover bg-center py-24 md:py-32 lg:py-40"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <h2 className="text-2xl font-medium text-foreground md:text-3xl">
              {profile.title}
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              {profile.tagline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/Image/profile-photo.jpg"
              alt="A professional portrait of Mayur Tawade."
              width={512}
              height={512}
              className="rounded-full object-cover aspect-square w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-primary/20 shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
