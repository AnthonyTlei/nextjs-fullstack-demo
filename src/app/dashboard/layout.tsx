import NavBar from "@/components/global/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
