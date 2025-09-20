import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div className="max-w-xs rounded-2xl bg-white p-4 dark:bg-gray-800">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-700">
        <Skeleton
          height={180}
          className="rounded-xl"
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
          enableAnimation
        />
      </div>

      <div className="mt-3 space-y-2">
        <Skeleton
          height={20}
          width={`80%`}
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
        />
        <Skeleton
          height={15}
          count={2}
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
        />
        <div className="flex items-center justify-between">
          <Skeleton
            height={20}
            width={50}
            baseColor="#e5e7eb"
            highlightColor="#f3f4f6"
          />
          <Skeleton
            height={20}
            width={60}
            baseColor="#e5e7eb"
            highlightColor="#f3f4f6"
          />
        </div>
      </div>

      <Skeleton
        height={40}
        className="mt-4 rounded-xl"
        baseColor="#e5e7eb"
        highlightColor="#f3f4f6"
      />
    </div>
  );
}

export default SkeletonCard;
