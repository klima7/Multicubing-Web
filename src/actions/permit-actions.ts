import { permitSlice } from "../reducers/permit-reducer";
import { checkRoomPermit } from "../api/rooms-api";


const permitActions = permitSlice.actions;


export function checkPermit(roomSlug: string) {
  return async (dispatch: any) => {
    try {
      dispatch(permitActions.checkStart())
      const permit = await checkRoomPermit(roomSlug);
      dispatch(permitActions.checkSuccess({permit: permit}))
    } catch(e) {
      dispatch(permitActions.checkFailure({error: e}))
    }
  };
}