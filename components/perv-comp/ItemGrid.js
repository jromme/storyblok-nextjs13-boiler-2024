import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Quote } from "./Quote";

export default function ItemGrid({ items, titanicModules }) {
  let gridNumber = 1;
  const titanicModule = titanicModules[0].text.json;

  const updateGridNumber = () => {
    gridNumber++;
    if (gridNumber > 10) {
      gridNumber = 1;
    }

    return gridNumber;
  };

  const colorPicker = (number) => {
    const isEven = (number) => number % 2 === 0;
    let color = isEven(number);
    if (color === false) {
      const returnedColor = "bg-gray-100";
      return returnedColor;
    }
    if (color === true) {
      const returnedColor = "bg-gray-200";
      return returnedColor;
    }

    console.log(returnedColor);
  };

  const BigItem = (item) => {
    return (
      <div
        key={item.sys.id}
        className={`py-m lg:py-xl ${colorPicker(
          gridNumber
        )} h-mobile lg:h-1/2 w-full basis-full`}
      >
        <a href={item.amazonReferralLink} rel="noreferrer" target="_blank">
          <div className="h-1/4 lg:h-1/6 lg:h-1/10 px-l lg:px-xl">
            <p className="mb-0 2xl:mb-3 text-xs lg:text-sm xl:text-base">{`Item no. ${item.itemNumber}`}</p>
            <div className="inline">
              <p>
                {item.categoriesCollection.items.map((category) => {
                  return (
                    <span
                      className="text-grid-h3-mobile lg:text-grid-h3-big"
                      key={category.sys.id}
                    >
                      {category.name}{" "}
                    </span>
                  );
                })}
                <span className="uppercase text-grid-h2-mobile lg:text-grid-h2-big">
                  {item.mainDescription}
                </span>{" "}
                <span className="text-grid-h3-mobile lg:text-grid-h3-big">
                  &#8212; {item.detailedDescription}
                </span>
              </p>
            </div>
          </div>
          <div className="px-s xl:px-m h-2/4 lg:h-4/6 lg:h-8/10">
            {item.backgroundImage && (
              <div className="w-full h-full relative">
                <Image
                  src={item.backgroundImage.url}
                  alt={item.backgroundImage.title}
                  layout="fill"
                  objectFit="contain"
                  className="mix-blend-multiply w-full"
                ></Image>
                <div className="text-center uppercase absolute w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="font-bold text-grid-h1-mobile lg:text-grid-h1-big lg:leading-none">
                    {item.backgroundTextOverlay}
                  </h1>
                </div>
              </div>
            )}
          </div>
          <div className="h-1/4 px-l content-end grid grid-cols-2 lg:px-xl lg:h-1/10 lg:grid-cols-3">
            <div>
              <p className="mini">Price</p>
              <p className="text-2xl font-roman font-bold">
                {item.price} &#8364;
              </p>
            </div>
            <p className="text-sm xl:text-xl text-center font-roman font-bold uppercase grid content-end">
              &#40;Amazon&#41;
            </p>
          </div>
        </a>
      </div>
    );
  };

  const ItemsBig = (item) => {
    updateGridNumber();
    return gridNumber !== 10 ? (
      BigItem(item)
    ) : (
      <>
        {BigItem(item)}
        {Quote(quote)}
      </>
    );
  };

  const SmallItem = (item) => {
    updateGridNumber();

    return (
      <div
        key={item.sys.id}
        className={`smallItem py-m xl:py-xl ${colorPicker(
          gridNumber
        )} h-mobile lg:h-1/3 w-full basis-full lg:w-1/3 lg:basis-1/3`}
      >
        <a href={item.amazonReferralLink} rel="noreferrer" target="_blank">
          <div className="h-1/4 px-l xl:px-xl">
            <p className="mb-0 2xl:mb-3">{`Item no. ${item.itemNumber}`}</p>
            <div className="inline">
              <p>
                {item.categoriesCollection.items.map((category) => {
                  return (
                    <span
                      className="text-grid-h3-mobile lg:text-grid-h3-small"
                      key={category.sys.id}
                    >
                      {category.name}{" "}
                    </span>
                  );
                })}
                <span className="text-grid-h2-mobile lg:text-grid-h2-small">
                  {item.mainDescription}
                </span>{" "}
                <span className="text-grid-h3-mobile lg:text-grid-h3-small">
                  &#8212; {item.detailedDescription}
                </span>
              </p>
            </div>
          </div>
          <div className="h-2/4 ">
            {item.backgroundImage && (
              <div className="w-full h-full relative">
                <Image
                  src={item.backgroundImage.url}
                  alt={item.backgroundImage.title}
                  layout="fill"
                  objectFit="contain"
                  className="mix-blend-multiply w-full"
                ></Image>
                <div className="text-center uppercase absolute w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="font-bold lg:font-normal text-grid-h1-mobile lg:text-grid-h1-small lg:leading-none">
                    {item.backgroundTextOverlay}
                  </h1>
                </div>
              </div>
            )}
          </div>
          <div className="h-1/4 px-l content-end grid grid-cols-2 lg:px-xl lg:grid-cols-3">
            <div>
              <p className="mini">Price</p>
              <p className="text-2xl font-roman font-bold">
                {item.price} &#8364;
              </p>
            </div>
            <p className="text-sm xl:text-xl text-center font-roman font-bold uppercase grid content-end">
              &#40;Amazon&#41;
            </p>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div>
      <div className="w-screen flex flex-wrap flex-row">
        {items.map((item) => {
          switch (gridNumber) {
            case 1:
              return (
                <div className="w-full portrait:w-full lg:portrait:w-1/2 landscape:w-1/2 lg:w-1/2">
                  {ItemsBig(item)}
                </div>
              );
              break;
            case 2:
              return (
                <div className="w-full portrait:w-full lg:portrait:w-1/2 landscape:w-1/2 lg:w-1/2">
                  {ItemsBig(item)}
                </div>
              );
              break;
            case 3:
              return SmallItem(item);
              break;
            case 4:
              return SmallItem(item);
              break;
            case 5:
              return SmallItem(item);
              break;
            case 6:
              return SmallItem(item);
              break;
            case 7:
              return SmallItem(item);
              break;
            case 8:
              return SmallItem(item);
              break;
            case 9:
              return <div className="w-full lg:w-1/2">{ItemsBig(item)}</div>;
              break;
            case 10:
              return <div className="w-full lg:w-1/2">{ItemsBig(item)}</div>;
              break;
            default:
              return <p>No items were loaded.</p>;
          }
        })}
      </div>
    </div>
  );
}
