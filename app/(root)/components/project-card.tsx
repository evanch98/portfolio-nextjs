import { Container } from "@/components/common/container";
import Placeholder from "@/public/assets/placeholder.jpg";
import Image from "next/image";

export const ProjectCard = () => {
  return (
    <Container>
      <div className="flex items-center justify-between"></div>
      <Image src={Placeholder} width={690} height={500} alt="Image" />
    </Container>
  );
};
