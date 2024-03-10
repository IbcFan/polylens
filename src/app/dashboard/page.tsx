import { unstable_noStore as noStore } from "next/cache";

import AddAlert from "~/app/_components/add-alert";
import Alerts from "~/app/_components/Alerts";

export default async function Dashboard() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="w-full max-w-xs">
          <AddAlert />
          <Alerts />
        </div>
      </div>
    </main>
  );
}