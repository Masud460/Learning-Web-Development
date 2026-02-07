import { NavLink, Outlet } from "react-router-dom";
import Pic from "../../assets/pic3.jpg";
export default function About() {
  return (
    <>
      <div className="w-full h-full">
        <div className="py-16 w-2/3 inline-block">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src={Pic} alt="image" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  React development is carried out by passionate developers
                </h2>
                <p className="mt-6 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-5 m-4 gap-15">
              <NavLink
                to="contact_us"
                className="bg-blue-500 border-none rounded-lg text-white font-semibold py-4 px-6 text-2xl cursor-pointer"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="faq"
                className="bg-blue-500 border-none rounded-lg text-white font-semibold py-4 text-2xl px-14 cursor-pointer"
              >
                FAQ
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-1/3 inline-block h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
