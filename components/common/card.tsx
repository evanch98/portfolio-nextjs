const Card = () => {
  return (
    <div className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2">
      <h3 className="md:text-lg lg:text-xl font-bold">Airbnb Clone</h3>
      <p className="opacity-70 text-sm md:text-base">
        An airbnb clone website built with Next JS, TypeScript, Tailwind CSS,
        Prisma, MongoDB, and Zustand.
      </p>
      <div className="flex items-center justify-center gap-x-4"></div>
    </div>
  );
};

export default Card;
