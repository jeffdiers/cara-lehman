"use client";

import { Clapperboard, Film, Video } from "lucide-react";
import { useState } from "react";

import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { VideoCard } from "@/components/video-card";
import { VideoModal } from "@/components/video-modal";

import {
  type WorkLink,
  type WorkLinkWithDepartment,
  projectsData,
} from "@/data/projects-data";

// Helper function to format roles
const formatRoles = (roles: string | string[]): string => {
  return Array.isArray(roles) ? roles.join(", ") : roles;
};

// Helper function to check if a project has links
const hasLinks = (project: WorkLink): project is WorkLinkWithDepartment => {
  return "links" in project && project.links !== undefined;
};

// Photo categories for filtering
const categories = [
  { id: "directing", name: "Producing & Directing" },
  { id: "camera", name: "Camera Department" },
  { id: "as-seen-on", name: "As Seen On" },
];

export default function VideoPage() {
  const [selectedCategory, setSelectedCategory] = useState("directing");
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

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {directingProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
                  >
                    <div className="p-6">
                      <h4 className="mb-2 line-clamp-2 h-16">
                        {project.title}
                      </h4>
                      <div className="mb-4 text-sm text-muted-foreground">
                        {formatRoles(project.role)}
                      </div>

                      {hasLinks(project) && (
                        <div className="space-y-2">
                          {Array.isArray(project.links) ? (
                            project.links.map((link, i) => (
                              <VideoCard key={i} url={link} img={project.img} />
                            ))
                          ) : (
                            <VideoCard url={project.links} img={project.img} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
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

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cameraDeptProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
                  >
                    <div className="p-6">
                      <h4 className="mb-2">{project.title}</h4>
                      <div className="mb-4 text-sm text-muted-foreground">
                        {formatRoles(project.role)}
                      </div>

                      {hasLinks(project) && (
                        <div className="space-y-2">
                          {Array.isArray(project.links) ? (
                            project.links.map((link, i) => (
                              <VideoCard key={i} url={link} />
                            ))
                          ) : (
                            <VideoCard url={project.links} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
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

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {asSeenOnProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
                  >
                    <div className="p-6">
                      <h4 className="mb-2">{project.title}</h4>
                      <div className="mb-4 text-sm text-muted-foreground">
                        {formatRoles(project.role)}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {"tags" in project &&
                          project.tags
                            .filter((tag) => tag !== "As Seen On")
                            .map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                      </div>

                      {hasLinks(project) && (
                        <div className="space-y-2">
                          {Array.isArray(project.links) ? (
                            project.links.map((link, i) => (
                              <VideoCard key={i} url={link} />
                            ))
                          ) : (
                            <VideoCard url={project.links} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
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
