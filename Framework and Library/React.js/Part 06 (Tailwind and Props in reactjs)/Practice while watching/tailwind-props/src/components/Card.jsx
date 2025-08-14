function Card({ heading = 'Loading...', data, array: arr, say: sayHello }) {
  console.log(sayHello);
  return (
    <>
      <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-4">
        <div className=" bg-black sm:p-10 p-6 rounded-xl">
          <div className="">
            <h5 className="text-xl font-bold text-gray-200">{heading}</h5>

            <p className="mt-2 text-sm text-gray-400">{data}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card