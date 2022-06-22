// types, actions creator and reducer

// import fetchRocketsAPI from '../../API/rocketsApI';
import axios from 'axios';

const fetchRocketsAPI = async () => {
  const res = await axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = res;
  return data;
};

const FETCH_ROCKETS = 'space/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'space/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space/rockets/CANCEL_RESERVATION';

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});
export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

const getRockets = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const fetchRocketsDispatch = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI();
  const filtered = rockets.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[1],
    reserved: rocket.active,
  }));
  dispatch(getRockets(filtered));
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};
export default rocketsReducer;
