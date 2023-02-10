import Card from '../components/Card/Card';
import useToast from '../context/toastContext';

function Dashboard() {
  const { setToast } = useToast();
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigens">Dashboard</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <Card title={'Click'} className="text-white">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">
              Acme Advanced
            </h2>
            <div className="text-xs font-semibold uppercase mb-1">Sales</div>
            <div className="flex items-start">
              <div className="text-3xl font-bold text-slate-800 mr-2">
                $17,489
              </div>
              <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">
                -14%
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4 ">
          <Card title={'Leads'} className="text-white">
            <h4>Toast</h4>
            <span className="isolate inline-flex rounded-md shadow-sm flex-col md:flex-row">
              <button
                onClick={() => setToast('Success Toast', 'success')}
                type="button"
                className="relative inline-flex items-center rounded md:rounded-l-md px-4 py-2 text-sm font-medium bg-green-500 hover:bg-green-600">
                Success
              </button>
              <button
                type="button"
                onClick={() => setToast('Error Toast', 'error')}
                className="relative -ml-px inline-flex items-center rounded md:rounded-none px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600">
                Error
              </button>
              <button
                type="button"
                onClick={() => setToast('Default Toast', '')}
                className="relative -ml-px inline-flex items-center px-4 rounded md:rounded-none py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600">
                Default
              </button>
              <button
                type="button"
                onClick={() => setToast('Warning Toast', 'warning')}
                className="relative -ml-px inline-flex items-center rounded md:rounded-r-md px-4 py-2 text-sm font-medium  bg-yellow-500 hover:bg-yellow-600">
                Warning
              </button>
            </span>
            {/* <button onClick={() => setToast('Success message')} className>
              Open Toast
            </button> */}
          </Card>
        </div>
        <div className="md:row-span-6 col-span-12 md:col-span-4">
          <Card title={'Viewer'} className="text-white h-full" />
        </div>
        <div className="col-span-12 md:col-span-8 ">
          <Card title={'Realtime'} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
