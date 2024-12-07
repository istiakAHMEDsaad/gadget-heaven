import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-screen h-screen" id="error-page">
      <h1 className="lg:text-6xl md:text-4xl text-3xl text-center">404! Page not found</h1>
      <p className="text-xl text-gray-500 text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

// import '../index.css'