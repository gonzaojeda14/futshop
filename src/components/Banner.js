import { GiftIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-black">
              <GiftIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="m-0 text-xs font-medium text-white truncate">
              Recibí un 10% de descuento en tu primera compra.
            </p>
          </div>
          <div className="order-3 m-0 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <NavLink
              to={"/camisetas"}
              className="flex items-center justify-center px-4 py-2 no-underline border border-transparent rounded-md shadow-sm text-xs font-medium text-blue-500 bg-white hover:bg-indigo-50"
            >
              Ver tienda
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
