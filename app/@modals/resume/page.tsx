"use client";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { CustomPDFViewer } from "@/components/pdf-viewer";

export default function ResumePage() {
  return (
    <ModalPage>
      <ModalPageTitle>Resume</ModalPageTitle>
      <ModalScrollBody>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <CustomPDFViewer pdfFile="/Jeff_Diers-Resume-2024.pdf" />
        </div>
      </ModalScrollBody>
    </ModalPage>
  );
}
