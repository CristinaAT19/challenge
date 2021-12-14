import React from "react";
import { Input } from "../components/Input";

const Home = () => {
  return (
    <>
      <div className="w-screen md:h-screen flex flex-col items-center justify-center bg-rosado sm:h-full">
        <img
          src="https://cristinaat19.github.io/Recursos/bg-intro-desktop.png"
          className="absolute h-full w-full "
        />
        <div className="flex justify-evenly items-center w-10/12 z-10 flex-wrap">
          <div className="w-t500 m-4">
            <h1 className="text-white text-5xl font-bold my-6">
              Aprenda a codificar observando a otros.
            </h1>
            <p className="text-white">
              Vea cómo los desarrolladores experimentados resuelven problemas en
              tiempo real. Ver tutoriales con guión es genial, pero comprender
              cómo piensan los desarrolladores es invaluable.
            </p>
          </div>
          <div className="w-l510 m-4">
            <h1 className="w-full p-4 bg-morado text-center rounded-lg text-white my-4 shadow-lg shadow-morado-500/50 font-medium">
              Pruébelo gratis 7 días y luego $ 20 / mes.
            </h1>
            <div className="flex flex-col items-center justify-center p-10 bg-white gap-4 z-10 rounded-lg shadow-lg shadow-white-500/50">
              <Input tipo="text" datos="First Name" />
              <Input tipo="text" datos="Last Name" />
              <Input tipo="text" datos="E-mail Address" />
              <Input tipo="password" datos="Password" />
              <button className="bg-verde w-full py-3 rounded-lg text-white font-medium">
                CLAIM YOUR FREE TRIAL
              </button>
              <h4 className="text-xs text-gray-300 font-semibold">Copyright Cristina Advincola | 2021</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
