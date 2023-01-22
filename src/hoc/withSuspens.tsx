import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

function withSuspense<WCP extends object>(WrappedComponents: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <React.Suspense
        fallback={
          <div>
            <Preloader />
          </div>
        }
      >
        <WrappedComponents {...props} />
      </React.Suspense>
    );
  };
};

export default withSuspense;
