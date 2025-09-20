import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "./SkeletonCard";

function SkeletonCategoryDetails() {
  return (
    <div className="animate-pulse px-6 py-10">
      <div className="mb-8 flex items-center justify-between gap-6">
        <Skeleton height={36} width={300} />
        <div className="flex items-center gap-3">
          <Skeleton height={30} width={80} />
          <Skeleton height={36} width={150} />
        </div>
      </div>

      <div className="my-5 flex flex-wrap items-center justify-center gap-7 drop-shadow-xl">
        {Array.from({ length: 3 }, (_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default SkeletonCategoryDetails;
