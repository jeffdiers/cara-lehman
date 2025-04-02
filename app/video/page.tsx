"use client";

import { Clapperboard, Film, Video } from "lucide-react";
import { useState } from "react";

import { ContentCard } from "@/components/content-card";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { VideoModal } from "@/components/video-modal";

import { projectsData } from "@/data/projects-data";

// Photo categories for filtering
const categories = [
  { id: "camera", name: "Camera Department" },
  { id: "directing", name: "Producing & Directing" },
  { id: "as-seen-on", name: "As Seen On" },
];

export default function VideoPage() {
  const [selectedCategory, setSelectedCategory] = useState("camera");
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    url: string;
  } | null>(null);

  // Group projects by department
  const directingProjects = projectsData.filter(
    (project) =>
      "department" in project && project.department === "Directing & Producing",
  );

  const cameraDeptProjects = projectsData.filter(
    (project) =>
      "department" in project && project.department === "Camera Department",
  );

  const asSeenOnProjects = projectsData.filter(
    (project) => "tags" in project && project.tags.includes("As Seen On"),
  );

  // Function to handle opening the video modal
  // const openVideoModal = (title: string, url: string) => {
  //   setSelectedVideo({ title, url });
  // };

  // Function to close the video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="pt-12 md:pt-24">
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4">Video Portfolio</h1>
        </div>

        <Tabs
          value={selectedCategory}
          defaultValue="directing"
          className="w-full"
        >
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Directing Section */}
          <TabsContent value="directing" className="space-y-8">
            <section className="mb-20">
              <h2 className="mb-8 flex items-center pb-2">
                Producing & Directing
                <Clapperboard className="ml-3" />
              </h2>

              <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {directingProjects.map((project, index) => (
                  <ContentCard key={index} project={project} />
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Camera Department Section */}
          <TabsContent value="camera" className="space-y-8">
            <section className="mb-20">
              <h2 className="mb-8 flex items-center pb-2">
                Camera Department
                <Video className="ml-3" />
              </h2>

              <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cameraDeptProjects.map((project, index) => (
                  <ContentCard key={index} project={project} />
                ))}
              </div>
            </section>
          </TabsContent>

          {/* AS SEEN ON Section */}
          <TabsContent value="as-seen-on">
            <section className="mb-20">
              <h2 className="mb-8 flex items-center pb-2">
                As Seen On
                <Film className="ml-3" />
              </h2>

              <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {asSeenOnProjects.map((project, index) => (
                  <ContentCard key={index} project={project} />
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cara Lehman. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={closeVideoModal}
          title={selectedVideo.title}
          url={selectedVideo.url}
        />
      )}
    </div>
  );
}
