import { accounts, mails } from "./data";
import { Mail } from "./mail";

export default function MailPage() {
  // const layout = cookies().get("react-resizable-panels:layout");
  // const collapsed = cookies().get("react-resizable-panels:collapsed");
  //
  // const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultLayout = undefined;
  const defaultCollapsed = undefined;
  return (
    <>
      <Skeleton />
      <Skeleton />
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-[1280px] h-[711px] min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
