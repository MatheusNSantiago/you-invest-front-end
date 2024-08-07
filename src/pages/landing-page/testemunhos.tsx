import { cn } from "@/utils/cn";
import { BadgeCheck } from "lucide-react";

export const Testemunhos = () => {
  return (
    <section className="w-[65%] text-white flex justify-center items-center gap-8 flex-col">
      <h2 className="mt-12 max-w-xs text-3xl font-semibold leading-tight text-center sm:max-w-none md:text-4xl md:leading-tight wide-container">
        O que nossos clientes estão dizendo
      </h2>

      <section className="grid relative grid-cols-12 gap-8 wide-container">
        <Testemunho
          name="Barack Obama"
          imageUrl="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg"
          handle="@Obaminha_2002"
          comments={3}
          likes={819}
          text="Achei topzeira memo. Nota 10!"
          date="20/02/2024"
          views={42069}
          retweets={300}
          time="04:20"
          className="col-span-6"
        />
        <Testemunho
          name="Taylor Swift"
          imageUrl="https://pbs.twimg.com/profile_images/1766836345450672128/HpuBz514_400x400.jpg"
          handle="@Taylor_Swift"
          text="Literalmente mudou minha vida. Recomendo!"
          className="col-span-6"
          comments={240}
          likes={1211}
          date="20/02/2024"
          time="04:20"
          views={42069}
          retweets={300}
        />
        <Testemunho
          name="Elon Musk"
          imageUrl="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"
          handle="@elonmusk"
          comments={91}
          likes={500}
          text="Genial! Queria ter tido essa ideia antes."
          date="20/02/2024"
          views={14090}
          retweets={1200}
          time="12:00"
          className="col-span-4"
        />
        <Testemunho
        name="Fausto Silva"
        imageUrl="https://pbs.twimg.com/profile_images/1418457201/promocap-provou-gostou-aviao-do-faustao_400x400.png"
        handle="@faustao_oficial"
        text="Rapaz, eu não acredito que não conheci esse produto antes. É sensacional!"
        className="col-span-4"
        comments={100}
        likes={1000}
        date="20/02/2024"
        time="12:00"
        views={10000}
        />
        <Testemunho
          name="Kanye West"
          imageUrl="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
          handle="@YeezyFanatic"
          text="Nunca mais vou conseguir viver sem esse produto. Obrigado!"
          className="col-span-4"
          comments={50}
          likes={3000}
          date="20/02/2024"
          time="12:00"
          views={50000}
          retweets={500}
        />
      </section>
    </section>
  );
};

export const Testemunho = ({
  name,
  handle,
  imageUrl,
  text,
  time,
  date,
  views,
  comments,
  retweets,
  likes,
  className,
  hideFooter,
}: {
  name: string;
  handle: string;
  imageUrl: string;
  text: string;
  time?: string;
  date?: string;
  views?: number;
  comments?: number;
  retweets?: number;
  likes?: number;
  className?: string;
  hideFooter?: boolean;
}) => {
  return (
    <a
      href={""}
      rel="noopener noreferrer"
      className={cn(
        className,
        "w-full flex flex-col p-4 pb-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg",
      )}
    >
      <div className="flex gap-5">
        <img
          src={imageUrl}
          alt={name}
          width={32}
          height={32}
          className="w-10 h-10 rounded-full shrink-0"
        />
        <div className="flex flex-col items-start">
          <p className="flex gap-1 items-center text-sm font-semibold text-black dark:text-white">
            {name}
            <BadgeCheck className="w-5 h-5 text-white fill-blue-500" />
          </p>
          <p className="text-xs text-gray-400">{handle}</p>
        </div>
      </div>

      <div>
        <p className="mt-3 text-2xl font-light text-black md:whitespace-pre-line dark:text-white">
          {text}
        </p>
      </div>

      {!hideFooter ? (
        <div className="mt-auto">
          {(time || date) && (
            <div className="flex gap-1 items-center pt-2">
              <p className="text-xs text-white">{time}</p>

              {date && (
                <>
                  <span className="text-gray-500">·</span>
                  <p className="text-xs text-gray-500">{date}</p>
                </>
              )}
            </div>
          )}
          <>
            <hr className="my-4 border-gray-300/50 dark:border-gray-500/50" />

            <div className="flex gap-4 text-xs text-gray-500">
              {views && (
                <p className="flex gap-1 items-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.83335 12V0H5.16669V12H3.83335ZM10 12V3.66667H11.3334V12H10ZM0.666687 12L0.669354 5.33333H2.00269L2.00002 12H0.666687ZM6.83202 12V7.33333H8.16535V12H6.83202Z"
                      fill="#536471"
                    />
                  </svg>

                  {views}
                </p>
              )}

              {comments && (
                <p className="flex gap-1 items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.167328 5.66665C0.167328 2.71998 2.55666 0.333313 5.50399 0.333313H8.41466C11.408 0.333313 13.834 2.75998 13.834 5.75331C13.834 7.72665 12.7627 9.53998 11.0367 10.4933L5.66733 13.4666V11.0066H5.62266C2.62933 11.0733 0.167328 8.66665 0.167328 5.66665ZM5.50399 1.66665C3.29266 1.66665 1.50066 3.45998 1.50066 5.66665C1.50066 7.91331 3.34733 9.71998 5.59266 9.67331L5.82666 9.66665H7.00066V11.2L10.392 9.32665C11.6927 8.60665 12.5007 7.23998 12.5007 5.75331C12.5007 3.49331 10.6713 1.66665 8.41466 1.66665H5.50399Z"
                      fill="#536471"
                    />
                  </svg>

                  {comments}
                </p>
              )}

              {retweets && (
                <p className="flex gap-1 items-center">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99999 0.58667L5.95465 3.34667L5.04532 4.32L3.66665 3.03334V8.66667C3.66665 9.4 4.26399 10 4.99999 10H8.66665V11.3333H4.99999C3.52732 11.3333 2.33332 10.14 2.33332 8.66667V3.03334L0.954652 4.32L0.0453186 3.34667L2.99999 0.58667ZM11 2H7.33332V0.66667H11C12.4727 0.66667 13.6667 1.86 13.6667 3.33334V8.96667L15.0453 7.68L15.9547 8.65334L13 11.4133L10.0453 8.65334L10.9547 7.68L12.3333 8.96667V3.33334C12.3333 2.6 11.736 2 11 2Z"
                      fill="#536471"
                    />
                  </svg>

                  {retweets}
                </p>
              )}

              {likes && (
                <p className="flex gap-1 items-center">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1313 1.66666C9.31667 1.62666 8.34534 2.00666 7.538 3.10666L7.00134 3.83333L6.464 3.10666C5.656 2.00666 4.684 1.62666 3.86934 1.66666C3.04067 1.71333 2.30334 2.18666 1.92934 2.94C1.56134 3.68666 1.50734 4.79333 2.24867 6.15333C2.96467 7.46666 4.42 9 7.00134 10.56C9.58134 9 11.036 7.46666 11.752 6.15333C12.4927 4.79333 12.4387 3.68666 12.07 2.94C11.696 2.18666 10.9593 1.71333 10.1313 1.66666ZM12.9227 6.79333C12.022 8.44666 10.2553 10.2067 7.33667 11.9067L7.00134 12.1067L6.66534 11.9067C3.746 10.2067 1.97934 8.44666 1.07734 6.79333C0.170669 5.12666 0.137336 3.55333 0.734669 2.34666C1.326 1.15333 2.49934 0.406664 3.802 0.339998C4.90267 0.279998 6.04734 0.713331 7.00067 1.68C7.95334 0.713331 9.098 0.279998 10.198 0.339998C11.5007 0.406664 12.674 1.15333 13.2653 2.34666C13.8627 3.55333 13.8293 5.12666 12.9227 6.79333Z"
                      fill="#536471"
                    />
                  </svg>

                  {likes}
                </p>
              )}
            </div>
          </>
        </div>
      ) : null}
    </a>
  );
};
