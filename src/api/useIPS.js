import { useQuery } from "react-query";
import { request } from "./request";

export const useIPS = ({ url }) => {
  // return useQuery([url], () => request(url), { enabled: !!url });
  return [{ test: "data" }];
};
