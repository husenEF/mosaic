import { GoPlus } from 'react-icons/go';

import Button from '../../components/button/button';
import RenderBroadCastItem from '../component/BroadcastItem';

import { DummyFormData } from '../../data/dummyForm';

const FormDashboard = () => {
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">List Form</h2>
        <Button
          icon={GoPlus}
          title="Form"
          onClick={() => console.log('add form')}
        />
      </div>
      <div className="grid grid-cols-12 gap-6">
        {DummyFormData?.map((e) => (
          <RenderBroadCastItem
            key={e.title}
            data={e.data}
            title={e.title}
            {...e}
          />
        ))}
      </div>
    </>
  );
};

export default FormDashboard;
