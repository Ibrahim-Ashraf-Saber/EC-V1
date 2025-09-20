import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonProduct() {
  return (
    <div className="px-4 py-6 md:px-12 lg:px-24">
      <div className="mb-6 text-center">
        <Skeleton height={40} width={300} />
        <Skeleton height={4} width={100} className="mx-auto mt-2" />
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <Skeleton height={384} className="rounded-xl" />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <Skeleton height={24} width={`80%`} />
          <Skeleton height={20} width={`60%`} />
          <div className="mt-2 flex gap-4">
            <Skeleton height={40} width={60} />
            <Skeleton height={40} width={60} />
            <Skeleton height={40} width={40} circle={true} />
          </div>
          <Skeleton height={48} width={`100%`} className="mt-6" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonProduct;
