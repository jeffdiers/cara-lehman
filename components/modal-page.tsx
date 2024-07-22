"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { useHistory } from "@/lib/history-context";
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

export function ModalPageTitle({ children }: PropsWithChildren) {
  return <DialogTitle className="p-6">{children}</DialogTitle>;
}

export function ModalScrollBody({ children }: PropsWithChildren) {
  return <div className="h-full overflow-y-auto p-1 sm:px-6">{children}</div>;
}

export function ModalPage({ children }: PropsWithChildren) {
  const router = useRouter();
  const history = useHistory();
  const segments = useSelectedLayoutSegments("children");
  const pathname = usePathname();

  const path = `/`;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Set the dialog to be open by default, only on the client side
  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  const handleClose = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      if (!history) {
        router.push(`${path}`); // if no history scroll to the segment
      } else {
        router.push(path, { scroll: false });
      }
    }, 300); // 500 milliseconds delay for animation
  };

  // const NextPageButton = () => {
  //   const currentPath = pathname.split('/').pop();
  //   const index = EXAMPLE_MICROBIOME_DATA.findIndex((item) => item.iconVariant === currentPath);
  //   if (index === -1) {
  //     return null;
  //   }
  //   const nextPath = EXAMPLE_MICROBIOME_DATA[index + 1]?.iconVariant;
  //   if (!nextPath) return null;
  //   return <ModalNext href={`/reports/${barcode}/microbiome/${nextPath}`} />;
  // };

  // const PreviousPageButton = () => {
  //   const currentPath = pathname.split('/').pop();
  //   const index = EXAMPLE_MICROBIOME_DATA.findIndex((item) => item.iconVariant === currentPath);
  //   if (index === -1) {
  //     return null;
  //   }
  //   const previousPath = EXAMPLE_MICROBIOME_DATA[index - 1]?.iconVariant;
  //   if (!previousPath) return null;
  //   return <ModalPrevious href={`/reports/${barcode}/microbiome/${previousPath}`} />;
  // };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleClose} modal>
      <DialogContent className="flex flex-col p-0 pb-6 sm:w-[90vw] sm:h-[90vh] h-full w-screen max-w-3xl border-0 sm:border gap-0">
        {children}
        {/* <NextPageButton />
        <PreviousPageButton /> */}
      </DialogContent>
    </Dialog>
  );
}
