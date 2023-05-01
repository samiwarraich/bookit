import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const RoomItem = ({ room }) => {
  const router = useRouter();
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-2">
        <Image
          onClick={() => {
            router.push(`/room/${room._id}`);
          }}
          className="card-img-top mx-auto btn"
          src={room.images[0].url}
          alt={room.name}
          height={170}
          width={170}
          priority
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link href={`/room/${room._id}`}>{room.name}</Link>
          </h5>

          <div className="ratings mt-auto mb-3">
            <p className="card-text">
              <b>${room.pricePerNight}</b> / night
            </p>

            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(room.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
          </div>

          <button
            className="btn btn-block view-btn text-white"
            onClick={() => {
              router.push(`/room/${room._id}`);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
