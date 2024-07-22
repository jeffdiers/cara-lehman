"use client";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function ResumePage() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <ModalPage>
      <ModalPageTitle>Resume</ModalPageTitle>
      <ModalScrollBody>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
          <div className="h-full">
            <Viewer
              fileUrl="/Jeff_Diers-Resume-2024.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </ModalScrollBody>
    </ModalPage>
  );
}
