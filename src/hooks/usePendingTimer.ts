import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pendingTimerTick } from "store/deployments";

export const usePendingTimer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const iHandle = setInterval(() => {
      dispatch(pendingTimerTick());
    }, 1000);

    return () => clearInterval(iHandle);
  }, [dispatch]);
};
