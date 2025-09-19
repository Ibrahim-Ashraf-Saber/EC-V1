import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div className="max-w-xs rounded-2xl bg-white p-4">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-2">
        <Skeleton height={180} className="rounded-xl" />
      </div>

      <div className="mt-3 space-y-2">
        <Skeleton height={20} width={`80%`} />
        <Skeleton height={15} count={2} />
        <div className="flex items-center justify-between">
          <Skeleton height={20} width={50} />
          <Skeleton height={20} width={60} />
        </div>
      </div>

      <Skeleton height={40} className="mt-4 rounded-xl" />
    </div>
  );
}

export default SkeletonCard;
