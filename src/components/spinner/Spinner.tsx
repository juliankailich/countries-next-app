import { SpinnerProps } from "@/shared/model/spinner/spinner.model";
import React from "react";
import { ClipLoader } from "react-spinners";

export const Spinner = ({ isLoading }: SpinnerProps) => {
  return <ClipLoader size={'50'} color={"#ffffff"} loading={isLoading} />;
};
