import { Navbar } from "@/components";

export default function PagesLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-28">
        <h1>Hello World</h1>
        {children}
      </main>
    </>
  );
}