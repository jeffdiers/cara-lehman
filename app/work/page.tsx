"use client";

import { Play } from "lucide-react";
import { useState } from "react";

import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default function WorkPage() {
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
  const openVideoModal = (title: string, url: string) => {
    setSelectedVideo({ title, url });
  };

  // Function to close the video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main content */}
      <main className="container mx-auto px-4 py-24 md:px-6">
        <h1 className="mt-8 mb-12">Portfolio</h1>

        {/* Directing Section */}
        <section className="mb-20">
          <h2 className="mb-8 pb-2">Directing</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {directingProjects.map((project, index) => (
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
                    <Button
                      size="sm"
                      className="flex w-full items-center justify-center"
                      onClick={() =>
                        openVideoModal(
                          project.title,
                          Array.isArray(project.links)
                            ? project.links[0]
                            : project.links,
                        )
                      }
                    >
                      <Play className="mr-2 h-4 w-4" /> Watch
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Camera Department Section */}
        <section className="mb-20">
          <h2 className="mb-8 pb-2">Camera Department</h2>

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
                          <Button
                            key={i}
                            size="sm"
                            className="flex w-full items-center justify-center"
                            onClick={() => openVideoModal(project.title, link)}
                          >
                            <Play className="mr-2 h-4 w-4" /> Watch{" "}
                            {project.links.length > 1 ? `#${i + 1}` : ""}
                          </Button>
                        ))
                      ) : (
                        <Button
                          size="sm"
                          className="flex w-full items-center justify-center"
                          onClick={() =>
                            // openVideoModal(project.title, project.links)
                            console.log("open video modal")
                          }
                        >
                          <Play className="mr-2 h-4 w-4" /> Watch
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AS SEEN ON Section */}
        <section className="mb-20">
          <h2 className="mb-8 pb-2">As Seen On</h2>

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
                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="flex w-full items-center justify-center"
                        onClick={() =>
                          openVideoModal(
                            project.title,
                            Array.isArray(project.links)
                              ? project.links[0]
                              : project.links,
                          )
                        }
                      >
                        <Play className="mr-2 h-4 w-4" /> Watch
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
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
