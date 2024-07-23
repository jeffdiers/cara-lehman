export function CustomPDFViewer({ pdfFile }: { pdfFile: string }) {
  return (
    <div>
      <iframe
        src={pdfFile}
        title="PDF Viewer"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
