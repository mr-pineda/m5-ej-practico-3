const Login = () => {
  return (
    <>
      <div className="w-full bg-sky-200 px-28 py-16">
        <h1 className="mb-10 text-center text-3xl font-bold text-black">
          Acceso de persoal
        </h1>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
      </div>
      <div className="m-20 flex flex-col items-center justify-center rounded-xl bg-sky-300">
        <button
          className="my-5 w-40 rounded-2xl bg-sky-950 p-3 font-bold text-white"
          onClick={() => {
            localStorage.setItem("authToken", "userToken");
          }}
        >
          login
        </button>
        <button
          className="my-5 w-40 rounded-2xl bg-red-900 p-3 font-bold text-white"
          onClick={() => {
            localStorage.removeItem("authToken");
          }}
        >
          logout
        </button>
      </div>
    </>
  );
};

export default Login;
