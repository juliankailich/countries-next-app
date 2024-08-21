import { SpinnerProps } from "@/shared/model/spinner/spinner.model";
import React from "react";
import { Spinner } from "./Spinner";

const SpinnerContainer = ({ isLoading }: SpinnerProps) => {
  return <Spinner isLoading={isLoading} />;
};

export default SpinnerContainer;