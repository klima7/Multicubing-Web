import { generalSlice } from '../reducers/general-reducer';

const generalActions = generalSlice.actions;

export const setTheme = generalActions.setTheme;

export const setParentUrl = generalActions.setParentUrl;

export const resetParentUrl = generalActions.resetParentUrl;
