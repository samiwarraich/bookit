import { combineReducers } from "redux";

import {
  allRoomsReducer,
  roomDetailsReducer,
  newRoomReducer,
  newReviewReducer,
  checkReviewReducer,
  roomReducer,
  roomReviewsReducer,
  reviewReducer,
} from "./roomReducers";
import {
  authReducer,
  userReducer,
  loadedUserReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./userReducers";
import {
  checkBookingReducer,
  bookedDatesReducer,
  bookingsReducer,
  bookingDetailsReducer,
  bookingReducer,
} from "./bookingReducers";

const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  newRoom: newRoomReducer,
  room: roomReducer,
  auth: authReducer,
  user: userReducer,
  loadedUser: loadedUserReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  bookingDetails: bookingDetailsReducer,
  booking: bookingReducer,
  newReview: newReviewReducer,
  checkReview: checkReviewReducer,
  roomReviews: roomReviewsReducer,
  review: reviewReducer,
});

export default reducers;
