const CustomHeading = ({ text, className }) => {
  return (
    <h2
      className={`font-normal main-heading font-luckiest uppercase  [text-shadow:_4px_4px_0_black] text-[52px] leading-custom-6xl text-white xl:text-[80px] xl:leading-[80px] ${className}`}
    >
      {text}
    </h2>
  );
};

export default CustomHeading;
