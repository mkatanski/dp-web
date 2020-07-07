import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pendingTimerTick } from "store/deployments";
import { usePendingData } from "./usePendingData";

export const usePendingTimer = () => {
  const dispatch = useDispatch();
  const pending = usePendingData();
  const pendingCount = Object.keys(pending).length;

  useEffect(() => {
    let iHandle: number;
    if (pendingCount) {
      iHandle = setInterval(() => {
        dispatch(pendingTimerTick());
      }, 1000);
    }

    return () => {
      iHandle && clearInterval(iHandle);
    };
  }, [dispatch, pendingCount]);
};
