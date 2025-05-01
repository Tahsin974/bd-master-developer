import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";

const TestimonialCard = ({ testimonial }) => {
  const { author, quote, rating } = testimonial;
  return (
    <div>
      <div className="card max-w-96 h-60 custom-shadow-inner mr-7 p-2">
        <div className="card-body">
          {/* Card Header with Author's Info */}
          <div className="flex items-center space-x-2.5">
            <div className="avatar">
              <div className="w-[54px] rounded-full">
                <img
                  src={testimonial.author.profileImageUrl}
                  alt={`${author.name}'s profile`}
                />
              </div>
            </div>
            <div>
              <h4 className="ruluko-regular text-[18px]">{author.name}</h4>
              <p className="ruluko-regular text-sm">{author.handle}</p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="ruluko-regular">{quote}</p>

          {/* Rating Component */}
          <div>
            <Rating
              emptySymbol={<FaRegStar className="text-yellow-500 text-lg" />}
              fullSymbol={<FaStar className="text-yellow-500 text-lg" />}
              initialRating={rating}
              readonly // Make the rating component readonly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
