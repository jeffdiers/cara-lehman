import { IconStorybook } from "@/components/icons";
import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StorybookPage() {
  return (
    <ModalPage>
      <ModalPageTitle>Storybook</ModalPageTitle>
      <ModalScrollBody>
        <Button asChild variant="outline" className="text-xl">
          <Link
            href="https://main--66a50784f23a062eb31464f4.chromatic.com/"
            target="_blank"
          >
            <IconStorybook className="h-6 w-6 mr-2" color="default" /> View
            Storybook
          </Link>
        </Button>
        <p className="mt-8">
          Here is a link to my Storybook where you can view some of the
          components I used to build this site. Storybook is a tool for
          developing UI components in isolation. It streamlines UI development,
          testing, and documentation. Storybook runs outside of your app. This
          allows you to develop UI components in isolation, which can improve
          component reuse, testability, and development speed.
        </p>
      </ModalScrollBody>
    </ModalPage>
  );
}
