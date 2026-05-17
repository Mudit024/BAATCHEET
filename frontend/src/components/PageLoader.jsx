import React from "react";
import { LoaderIcon } from "lucide-react";

function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <LoaderIcon className="size-10 animate-spin" />
      <p className="text-white">Loading..</p>
    </div>
  );
}

export default PageLoader;