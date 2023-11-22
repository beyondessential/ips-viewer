import { useQuery } from "react-query";
import { request } from "./request";

export const useIPS = ({ url }) =>
  useQuery([url], () => request(url), { enabled: !!url });
