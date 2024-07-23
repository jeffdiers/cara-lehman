"use client";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { Resume } from "@/components/resume";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <ModalPage>
      <ModalPageTitle>Resume</ModalPageTitle>
      <ModalScrollBody>
        <Button asChild variant="outline" className="text-xl">
          <a href="/Jeff_Diers-Resume-2024.pdf" download>
            📄 Download PDF
          </a>
        </Button>
        <div className="bg-white rounded-lg p-4 mt-8">
          <Resume />
        </div>
      </ModalScrollBody>
    </ModalPage>
  );
}
