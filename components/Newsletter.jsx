export default function Newsletter() {
  return (
    <div className="bg-[#18223d] text-white w-full py-10 mt-20">
      <div className="w-[95%] grid sm:grid-cols-4 grid-cols-2 gap-2 items-center mx-auto">
        <div className="sm:col-span-1 col-span-2">
          <p className="text-lg text-center sm:text-left  font-bold">Subscribe To Our Newsletter</p>
        </div>
        <div className="col-span-2 flex items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-[80%] h-[50px] border rounded-l-[50px] pl-[20px] outline-none focus:border-blue-700"
          />
          <button className="bg-blue-600 text-white font-semibold w-[30%] h-[50px] border-r rounded-r-[50px] sm:px-5 px-2">
            Subscribe
          </button>
        </div>
        <div className="col-span-2 sm:col-span-1 flex items-center justify-center">
          <i className="bx bxl-facebook bx-sm text-gray-600 hover:border hover:rounded-full hover:bg-blue-600 hover:text-white p-2 cursor-pointer mr-5"></i>
          <i className="bx bxl-twitter bx-sm text-gray-600 hover:border hover:rounded-full hover:bg-blue-600 hover:text-white p-2 cursor-pointer mr-5"></i>
          <i className="bx bxl-pinterest-alt bx-sm text-gray-600 hover:border hover:rounded-full hover:bg-blue-600 hover:text-white p-2 cursor-pointer mr-5"></i>
          <i className="bx bxl-instagram bx-sm text-gray-600 hover:border hover:rounded-full hover:bg-blue-600 hover:text-white p-2 cursor-pointer mr-5"></i>
        </div>
      </div>
    </div>
  );
}
