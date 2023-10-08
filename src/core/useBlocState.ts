import { useEffect, useState } from "react";
import Ploc from "./presentation/ploc";

export const useBlocState = (bloc: Ploc) => {
  const [state, setState] = useState<any>(bloc.state);

  // Register a listener to update the component state when the Ploc's state changes
  useEffect(() => {
    const listener = (updatedState: any) => {
      setState(updatedState);
    };

    bloc.addListener(listener);

    // Clean up the listener when the component unmounts
    return () => {
      bloc.removeListener(listener);
    };
  }, [bloc]);

  return state;
};
