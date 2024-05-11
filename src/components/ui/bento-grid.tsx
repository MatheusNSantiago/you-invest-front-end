import { cn } from "@/lib/utils";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-5 gap-4 mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};
export default BentoGrid;

type BentoGridProps = {
  className?: string;
  title?: string | React.ReactNode;
  imageSource?: string;
  onClick?: () => void;
};

export const BentoGridItem = ({
  className,
  title,
  imageSource,
  onClick,
}: BentoGridProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "hover:cursor-pointer  row-span-1 rounded-xl group/bento hover:shadow transition duration-200 shadow-input dark:shadow-[#1e293b] shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {imageSource ? (
        <img
          src={imageSource}
          className="flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        />
      ) : (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-gradient-to-br from-neutral-800 to-neutral-900" />
      )}

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
      </div>
    </div>
  );
};
