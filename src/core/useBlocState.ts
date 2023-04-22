import { useEffect, useState } from "react";
import Ploc from "./presentation/ploc";

export const useBlocState = (bloc: Ploc) => {
  const [state, setState] = useState(bloc.state);

  useEffect(() => {
    setState(bloc.state);
  }, [bloc]);

  return state;
}
