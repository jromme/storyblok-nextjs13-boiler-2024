export const Quote = (quote) => {
  return (
    <div className="w-screen h-titanicMobile landscape:h-titanicMobileLandscape lg:h-titanic landscape:lg:h-titanic flex flex-col text-justify titanic p-pxl lg:p-pxl bg-black text-white text-3xl lg:text-3vw !font-roman">
      {documentToReactComponents(quote)}
    </div>
  );
};
