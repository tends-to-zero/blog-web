import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // ✅ import Skeleton

const Lazyimage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && <div className="flex items-center space-x-4">
        <Skeleton className="h-96 w-full rounded-lg mb-2" />
      </div>}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? "block" : "hidden"}`}
        onLoad ={() => setLoaded(true)}
      />
    </div>
  );
};

export default Lazyimage;
