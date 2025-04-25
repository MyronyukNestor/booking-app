import { assets } from "../assets/assets";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex mt-5">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
          alt=""
          className="w-4.5 h-4.5"
        />
      ))}
    </div>
  );
};

export default StarRating;
