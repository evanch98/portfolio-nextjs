"use client";

import { MainNav } from "@/components/main-nav";
import { Container } from "@/components/common/container";

const HomeClient = () => {
  return (
    <div className="hero-background w-full h-full">
      <MainNav />
      <Container>
        <div>Hello</div>
      </Container>
    </div>
  );
};

export default HomeClient;
