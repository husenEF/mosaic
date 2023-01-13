
import './auth.scss'

const BgRotate = ({ children }) => {
  return <div>{children}</div>;
};
const LoginPage = () => {
  return (
    <div className="grid h-screen place-items-center bg-red-500 ">
      <div className="p-4 flex flex-col h-60 justify-center md:w-[305px] min-h- rounded-xl group sm:flex bg-white bg-opacity-50 shadow-xl">
        <h1 className="text-white mb-3 text-6xl">Hello</h1>
        <input
          className="rounded-full mb-3 p-2 border-none text-center w-full min-w-max bg-white focus:border-none"
          placeholder="username"
        />
        <input
          className="rounded-full mb-3 p-2 border-none text-center w-full min-w-max bg-white focus:border-none"
          placeholder="password"
          type="password"
        />
      </div>
    </div>
  );
};

export default LoginPage;
