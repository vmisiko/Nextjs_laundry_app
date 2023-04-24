import { useEffect, useState } from "react";
import Ploc from "./presentation/ploc";

export const useBlocState = (bloc: Ploc) => {
  const [state, setState] = useState<any>(bloc.state);
  useEffect(() => {
    setState(bloc.state);
    console.log(bloc.state, 'useBlocState');
  }, [bloc.state])
  return state;
}
