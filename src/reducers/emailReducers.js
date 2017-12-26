import { FETCH_EMAILS, DELETE_EMAILS} from "../actions/types";
import _ from 'lodash';



export default function(state = [], actions) {
  switch (actions.type) {
    case FETCH_EMAILS:
      return actions.payload;
    case DELETE_EMAILS:
    return state;
    default:
      return state;
  }
}
