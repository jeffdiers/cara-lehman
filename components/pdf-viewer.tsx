import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

export function CustomPDFViewer({ pdfFile }: { pdfFile: string }) {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div className="h-full w-full">
        <Viewer fileUrl={pdfFile} />
      </div>
    </Worker>
  );
}
