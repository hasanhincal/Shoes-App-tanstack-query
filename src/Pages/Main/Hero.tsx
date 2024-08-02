const Hero = () => {
  return (
    <div className="relative mt-6 lg:mt-20">
      <div className="absolute text-white top-1/2 transform -translate-y-1/2 ps-4 md:ps-6 ">
        <p className="text-[12px] sm:text-[18px] lg:text-[20px] xl:text-[24px] text-gray font-open font-semibold">
          Limited time only
        </p>
        <h1 className="text-[20px] sm:text-[26px] lg:text-[40px] xl:text-[74px]">
          Get 30% off
        </h1>
        <p className="text-[10px] sm:text-[14px] lg:text-[18px] xl:text-[20px] max-w-[50%] text-gray font-open font-semibold">
          Sneakers made with your comfort in mind so you can put all of your
          focus into your next session.
        </p>
      </div>

      <img src="/hero.png" alt="hero-png" />
    </div>
  );
};

export default Hero;
