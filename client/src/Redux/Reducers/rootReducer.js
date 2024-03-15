import { combineReducers } from "redux";

// reducers
import restaurant from "./Restaurant/restaurant.reducer";
import image from "./Image/image.reducer";
import review from "./Review/review.reducer";
import user from "./User/user.reducer";
import food from "./Food/food.reducer";
import auth from "./Auth/auth.reducer";

const rootReducer = combineReducers({
  restaurant,
  image,
  review,
  user,
  food,
  auth,
});

export default rootReducer;
