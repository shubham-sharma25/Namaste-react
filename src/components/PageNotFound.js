import {useRouteError} from "react-router-dom";

const PageNotFound = () => {
    const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">{error.status}</h1>
      <p className="mt-4 text-xl text-gray-700">{error.statusText}</p>
    </div>
  );
}
export default PageNotFound;