import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

const withSuspense = (Components) => {
  return (props) => {
    return (
      <React.Suspense
        fallback={
          <div>
            <Preloader />
          </div>
        }
      >
        <Components {...props} />
      </React.Suspense>
    );
  };
};

export default withSuspense;
