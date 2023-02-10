import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLockAlt } from 'react-icons/bi';

import BoxAnimate from '../../components/box/animate';

import { delay } from '../../utils/Utils';

import './auth.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSubmit, setSumbit] = useState(false);

  const handlingSubmit = (e) => {
    e.preventDefault();
    setSumbit(true);
    delay(3000).then(() => {
      setSumbit(false);
      navigate('/', { replace: true });
    });
    return false;
  };

  return (
    <BoxAnimate className="min-h-screen flex flex-col items-center justify-center">
      <div className="grid place-items-center max-w-full">
        <form action="#" className="relative w-full" onSubmit={handlingSubmit}>
          <div className="flex flex-col bg-opacity-3 px-4 py-8 rounded-default w-full max-w-full mx-0 h-[500px] rect bg-opacity-25 max-h-full">
            <div className="basis-1/2 flex justify-end flex-col">
              <h1 className=" text-white mb-3 text-[40px] font-oxigen ">
                Hello,
              </h1>
            </div>
            <div className="relative">
              <div className="flex flex-col mb-6">
                <input
                  className="rounded-default p-2 border-none text-center w-full min-w-max bg-white focus:border-none"
                  placeholder="username"
                />
              </div>
              <div className="flex flex-col mb-6">
                <input
                  className="rounded-default p-2 border-none text-center w-full min-w-max bg-white focus:border-none"
                  placeholder="password"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-full -bottom-[54px]">
            <div className="flex justify-center">
              <button
                className="rounded-full w-[100px] h-[100px] bg-[#F9BFDC] bg-opacity-50 text-secondary-70 items-center justify-center flex "
                type="submit">
                {isSubmit ? (
                  <div
                    className="w-12 h-12 rounded-full animate-spin
                  border-2 border-solid border-primary-50 border-b-transparent"
                  />
                ) : (
                  <BiLockAlt className="h-9 w-9" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </BoxAnimate>
  );
};

export default LoginPage;
