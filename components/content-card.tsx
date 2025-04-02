"use client";

import React from "react";

import { WorkLink, WorkLinkWithDepartment } from "@/data/projects-data";

import { Badge } from "./ui/badge";
import { VideoCard } from "./video-card";

// Helper function to format roles
const formatRoles = (roles: string | string[]): string => {
  return Array.isArray(roles) ? roles.join(", ") : roles;
};

// Helper function to check if a project has links
const hasLinks = (project: WorkLink): project is WorkLinkWithDepartment => {
  return "links" in project && project.links !== undefined;
};

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: WorkLink;
}

export function ContentCard({ project, ...props }: ContentCardProps) {
  const { title, description, role: projectRole } = project;
  return (
    <div
      {...props}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
    >
      <div className="flex h-full flex-col p-6">
        <h4 className="mb-2">{title}</h4>
        {description && <p className="mb-4">{description}</p>}
        <div className="mb-4 text-sm text-muted-foreground">
          {formatRoles(projectRole)}
        </div>

        {"tags" in project && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags
              .filter((tag) => tag !== "As Seen On")
              .map((tag, i) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
          </div>
        )}

        <div className="mt-auto space-y-2">
          {hasLinks(project) &&
            (Array.isArray(project.links) ? (
              project.links.map((link, i) => (
                <VideoCard key={i} url={link} img={project.img} />
              ))
            ) : (
              <VideoCard url={project.links} img={project.img} />
            ))}
        </div>
      </div>
    </div>
  );
}
