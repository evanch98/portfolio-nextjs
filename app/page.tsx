import ClientOnly from "@/components/common/ClientOnly";
import Main from "@/components/main/Main";
import RecentProjects from "@/components/recent-projects/RecentProjects";

export default function Home() {
  return (
    <ClientOnly>
      <main>
        <Main />
        <RecentProjects />
      </main>
    </ClientOnly>
  );
}
