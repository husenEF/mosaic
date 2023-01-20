import { Outlet } from 'react-router-dom';

const FormPage = () => {
  
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <Outlet />
    </div>
  );
};

export default FormPage;
