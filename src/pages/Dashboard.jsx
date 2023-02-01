import Card from '../components/Card/Card';

function Dashboard() {
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">Dashboard</h2>
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
          <Card title={'Leads'} className="text-white" />
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
