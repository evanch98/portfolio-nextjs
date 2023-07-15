"use client";

const Main = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full px-2 lg:px-0 lg:max-w-[1240px] flex items-center justify-between">
        <section
          className="lg:w-[350px] h-full"
          aria-label="Introduction section"
        >
          <h1
            className="text-2xl text-center lg:text-left lg:text-4xl font-bold lg:leading-[60px]"
            aria-label="Introduction Title"
          >
            HEY! I'm Kyaw Thu, AN ASPIRING FRONT-END DEVELOPER BASED IN TAIWAN
          </h1>
          <p>
            I am currently pursuing a Bachelor of Science in Computer Science at
            the University of the People.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Main;
