import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div className="w-[250px] rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
      {/* صورة المنتج */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-700">
        <Skeleton
          height={200} // زيادة ارتفاع الصورة
          className="rounded-xl"
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
          enableAnimation
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="mt-3 space-y-2">
        <Skeleton
          height={22}
          width="90%"
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
        />
        <Skeleton
          height={16}
          count={2}
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
        />
        <div className="flex items-center justify-between">
          <Skeleton
            height={20}
            width={60}
            baseColor="#e5e7eb"
            highlightColor="#f3f4f6"
          />
          <Skeleton
            height={20}
            width={70}
            baseColor="#e5e7eb"
            highlightColor="#f3f4f6"
          />
        </div>
      </div>

      {/* زر أو badge */}
      <Skeleton
        height={45} // زيادة ارتفاع الزر
        className="mt-4 rounded-xl"
        baseColor="#e5e7eb"
        highlightColor="#f3f4f6"
      />
    </div>
  );
}

export default SkeletonCard;
