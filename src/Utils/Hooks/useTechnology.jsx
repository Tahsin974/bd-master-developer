import React from "react";
import UseAxiosPublic from "../AxiosPublic/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useTechnology = (category) => {
  const axiosPublic = UseAxiosPublic();
  console.log(category);
  const { data: technologies = [], isPending } = useQuery({
    queryKey: ["technologies", category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/technologies?category=${category}`);
      return res.data;
    },
  });
  return [technologies, isPending];
};

export default useTechnology;
