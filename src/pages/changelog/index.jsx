import { formatDate } from '../../utils/dateTimeFormat';
import Card from '../../components/Card/Card';

import { DummyLogs } from '../../data/dummyLogs';

const ChangeLogPage = () => {
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">Changelog</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {DummyLogs.map((e) => {
          const title = formatDate(e.createdAt, 'd MMMM');
          return (
            <Card title={title} key={e.id}>
              <span className='inline-block text-secondary-50 text-sm mb-2'>{e.feature}</span>
              <p className='text-white'>{e.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default ChangeLogPage;
