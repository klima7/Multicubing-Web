import { permitSlice } from "./permit-reducer";
import { checkRoomPermit, sendRoomPassword } from "../../api/rooms-api";


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

export function enterRoomPassword(roomSlug: string, password: string) {
  return async (dispatch: any) => {
    try {
      dispatch(permitActions.enterStart({password}))
      const passwordCorrect = await sendRoomPassword(roomSlug, password);
      dispatch(permitActions.enterSuccess({passwordCorrect: passwordCorrect}))
    } catch(e) {
      dispatch(permitActions.enterFailure({error: e}))
    }
  };
}