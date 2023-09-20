import { Container } from "@/components/common/container";
import { MainNav } from "@/components/main-nav";

export const HeroSection = () => {
  return (
    <div className="hero-background w-full h-full">
      <MainNav />
      <Container>
        <div>Hello</div>
      </Container>
    </div>
  );
}