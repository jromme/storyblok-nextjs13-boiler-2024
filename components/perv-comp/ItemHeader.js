import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";
import ItemTitle from "../components/item-title";

export default function ItemHeader({
  mainDescription,
  itemNumber,
  detailedDescription,
  price,
}) {
  return (
    <>
      <>
        <p>{`Item no. ${itemNumber}`}</p>
      </>
      <p>
        {mainDescription} — {detailedDescription}
      </p>
      <div className="price-section flex flex-col">
        <p>Price</p>
        <h4>{price}</h4>
      </div>
      {/* <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div> */}
    </>
  );
}
