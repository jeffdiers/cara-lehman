import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import Image from "next/image";
import { MY_STACK, TechBadge } from "@/components/tech-badge";
import { H3, P } from "@/components/ui/typography";
import meAndBernie from "@/public/me_and_bernie.webp";

export default function AboutMePage() {
  return (
    <ModalPage>
      <ModalPageTitle>About Me</ModalPageTitle>
      <ModalScrollBody>
        <Image
          src={meAndBernie}
          alt="Picture of Jeff Diers and his dog Bernie"
          className="rounded-full"
          priority
        />

        <H3 className="mt-8">Jeff Diers</H3>
        <P>
          I am an experienced software engineer and application developer
          passionate about driving digital transformation and creating
          innovative solutions. With expertise in full-stack development, I
          leverage a diverse skill set in popular languages, frameworks, and
          libraries with a focus on expanding my knowledge and skillset.
        </P>
        <div className="flex flex-col items-center gap-y-3 mb-2 mt-8">
          <H3>Technologies I Work With</H3>
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(MY_STACK).map(
              (
                badge // MY_STACK is an array of tech badges
              ) => (
                <TechBadge
                  key={badge}
                  type={badge as keyof typeof MY_STACK}
                  variant="secondary"
                />
              )
            )}
          </div>
        </div>
        <P>
          Currently, I am a Senior Software Engineer at Jona, where I contribute
          to a high-paced startup environment, developing and maintaining a
          customer-facing web application powered by AI. My work focuses on
          enhancing user experience and system performance through the
          development of both frontend UI components and backend APIs.
        </P>
        <P>
          My career spans across several companies where I have consistently
          delivered high-quality code and collaborated with cross-functional
          teams to create scalable, sustainable, and accessible solutions. I
          have a strong background in developing AI-powered tools, optimizing
          web performance, and building comprehensive UI component libraries.
        </P>
        <P>
          Beyond my professional work, I enjoy exploring the complexities of
          software engineering and staying updated with the latest industry
          trends. When I&apos;m not coding, you can find me spending quality
          time with my family and my dog, Bernie 🐶.
        </P>
      </ModalScrollBody>
    </ModalPage>
  );
}
