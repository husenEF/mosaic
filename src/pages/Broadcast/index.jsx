import { Outlet } from 'react-router-dom';

const BroadcastPage = () => {
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <Outlet />
    </div>
  );
};

export default BroadcastPage;
