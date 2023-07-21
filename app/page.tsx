import ClientOnly from "@/components/common/ClientOnly";
import Main from "@/components/main/Main";
import Image from "next/image";

export default function Home() {
  return (
    <ClientOnly>
      <main>
        <Main />
      </main>
    </ClientOnly>
  );
}
