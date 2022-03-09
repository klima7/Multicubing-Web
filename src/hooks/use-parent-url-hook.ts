import { useEffect } from 'react';
import { resetParentUrl, setParentUrl } from '../redux/general/general-actions';
import { useAppThunkDispatch } from './redux-hooks';

export function useParentUrl(parentUrl: string, dependents: Array<any> = []) {
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(setParentUrl({parentUrl: parentUrl}))
    return () => {
      dispatch(resetParentUrl());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependents);
}