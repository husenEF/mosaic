import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import Card from '../../../components/Card/Card';

import { DummyFormData } from '../../../data/dummyForm';
// import Datepicker from '../../components/Datepicker';

const DeviceAdd = () => {
  const params = useParams();
  const [formState, setFormState] = useState(null);
  useEffect(() => {
    const data = DummyFormData?.find((data) => data?.id === params?.formId);
    setFormState(data);
  }, [params?.formId]);
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">
          Device name
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        <div className="col-span-12 ">
          <Card title={'Add/Edit'} prevIcon={AiFillEdit} className="">
            <h2>edit</h2>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DeviceAdd;
