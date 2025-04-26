import { HandleErrorFunction } from "react-router";

export const handleError = (
  error,
  { request }
) => {
  // React Router may abort some interrupted requests, don't log those
  if (!request.signal.aborted) {
    console.error(error);
  }
};

