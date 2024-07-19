import { Badge } from "@/components/ui/badge";
import ModalPage from "../_components/modal-page";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { MY_STACK, TechBadge } from "@/components/tech-badge";

export default function AboutMePage() {
  return (
    <ModalPage>
      <DialogContent className="flex flex-col sm:w-[90vw] sm:h-[90vh] h-full w-screen max-w-3xl border-0 sm:border">
        <DialogTitle>About Me</DialogTitle>
        <main className="h-full p-4 overflow-y-auto">
          <div className="flex flex-col items-center">
            <Image
              src="/me_and_bernie.jpeg"
              alt="Picture of Jeff Diers and his dog Bernie"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Jeff Diers</h2>
            <p className="mb-4 text-center">
              I am an experienced software engineer and application developer
              passionate about driving digital transformation and creating
              innovative solutions. With expertise in full-stack development, I
              leverage a diverse skill set in popular languages, frameworks, and
              libraries including TypeScript, MongoDB, SQL, GO, React.js,
              Next.js, jQuery, and Node.js.
            </p>
            <p className="mb-4 text-center">
              Currently, I am a Senior Software Engineer at Jona, where I
              contribute to a high-paced startup environment, developing and
              maintaining a customer-facing web application powered by AI. My
              work focuses on enhancing user experience and system performance
              through the development of both frontend UI components and backend
              APIs.
            </p>
            <p className="mb-4 text-center">
              My career spans across several companies where I have consistently
              delivered high-quality code and collaborated with cross-functional
              teams to create scalable, sustainable, and accessible solutions. I
              have a strong background in developing AI-powered tools,
              optimizing web performance, and building comprehensive UI
              component libraries.
            </p>
            <p className="mb-4 text-center">
              Beyond my professional work, I enjoy exploring the complexities of
              software engineering and staying updated with the latest industry
              trends. When I&apos;m not coding, you can find me spending quality
              time with my dog, Bernie 🐶.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-1 justify-center">
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
            <p className="text-center mt-4">
              I love working with these technologies to build innovative
              solutions and tackle new challenges every day! 🚀
            </p>
          </div>
        </main>
      </DialogContent>
    </ModalPage>
  );
}
