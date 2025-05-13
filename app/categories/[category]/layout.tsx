import Navbar from "../../components/Navbar";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 h-screen">
      <Navbar showWelcomeMessage={false} />
      {children}
    </div>
  );
}
