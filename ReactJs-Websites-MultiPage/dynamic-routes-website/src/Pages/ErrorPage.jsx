import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError;

  console.log(error);

  return (
    <>
      <div>
        <h1>Oops! An Error occured.</h1>
        {error?.statusText || error?.message ? (
          <p>{error.statusText || error.message}</p>
        ) : (
          <p>Something went wrong.</p>
        )}
        <NavLink to="/">
          <button>Go to Back</button>
        </NavLink>
      </div>
    </>
  );
};
