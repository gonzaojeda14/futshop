import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Variedad de camisetas",
    description:
      "No nos quedamos con lo clásico y te ofrecemos indumentaria oficial de cualquier país.",
    icon: CheckCircleIcon,
  },
  {
    name: "Productos oficiales",
    description: "Todos los productos y su packaging son 100% originales.",
    icon: CheckCircleIcon,
  },
  {
    name: "Pedidos personalizados",
    description:
      "Si no encontrás la camiseta que querés, podés contactarnos y nosotros te la conseguimos.",
    icon: CheckCircleIcon,
  },
  {
    name: "FutCoins",
    description:
      "Con tu compra acumulás puntos que podrás intercambiar por descuentos en futuras compras.",
    icon: CheckCircleIcon,
  },
];

function Nosotros() {
  return (
    <div className="py-12 bg-white divNosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            El sitio de las camisetas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Sómos fanáticos de este deporte y brindamos un servicio especial
            para vos
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
export default Nosotros;
