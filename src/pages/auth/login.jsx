import { LockClosedIcon } from '@heroicons/react/24/outline';

import BoxAnimate from '../../components/box/animate';

import './auth.scss';

const LoginPage = () => {
  return (
    <BoxAnimate className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto flex justify-center">
        <form action="#" className="relative">
          <div className="flex flex-col bg-opacity-3 shadow-xl px-4 py-8 rounded-md w-full max-w-xs mx-3 sm:mx-0 h-[500px] rect">
            <div className="basis-1/2 flex justify-end flex-col">
              <h1 className=" text-white mb-3 text-6xl font-oxigen ">Hello</h1>
            </div>
            <div className="relative">
              <div className="flex flex-col mb-6">
                <input
                  className="rounded-full mb-3 p-2 border-none text-center w-full min-w-max bg-white focus:border-none"
                  placeholder="username"
                />
              </div>
              <div className="flex flex-col mb-6">
                <input
                  className="rounded-full mb-3 p-2 border-none text-center w-full min-w-max bg-white focus:border-none"
                  placeholder="password"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-full -bottom-[54px]">
            <div className="flex justify-center">
              <button
                className="rounded-full w-[100px] h-[100px] bg-[#F9BFDC] text-secondary-70 items-center justify-center flex "
                type="submit">
                <LockClosedIcon className="h-9 w-9" aria-hidden="true" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </BoxAnimate>
  );
  return (
    <BoxAnimate className="grid h-screen ">
      <div className="sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col p-3 h-60 rounded-xl group sm:flex bg-[#F9BFDC] bg-opacity-3 shadow-xl ">
          <h1 className="text-white mb-3 text-6xl font-oxigen">Hello</h1>
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
    </BoxAnimate>
  );
  return (
    <div className="grid h-screen place-items-center bg-animate">
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
