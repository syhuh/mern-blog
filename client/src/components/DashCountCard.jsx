import { HiArrowNarrowUp } from "react-icons/hi";

export default function DashCountCard({
  title,
  totalCounts,
  lastMonthCounts,
  icon,
}) {
  return (
    <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-gray-500 text-md uppercase">{title}</h3>
          <p className="text-2xl">{totalCounts}</p>
        </div>
        {icon}
      </div>
      <div className="flex gap-2 text-sm">
        <span className="text-green-500 flex items-center">
          <HiArrowNarrowUp />
          {lastMonthCounts}
        </span>
        <div className="text-gray-500">Last month</div>
      </div>
    </div>
  );
}
