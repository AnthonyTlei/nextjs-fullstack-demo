import { auth } from "@clerk/nextjs";

export const metadata = {
  title: "App - Dashboard",
};

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  return <div className="">Dashboard</div>;
}
