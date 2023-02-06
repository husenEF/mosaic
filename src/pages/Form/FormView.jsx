import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/button/button';
import Card from '../../components/Card/Card';
import BaseInput from '../../components/input/BaseInput';

import { DummyFormData } from '../../data/dummyForm';
import Datepicker from '../../components/Datepicker';

const FormView = () => {
  const params = useParams();
  const [formState, setFormState] = useState(null);
  useEffect(() => {
    const data = DummyFormData?.find((data) => data?.id === params?.formId);
    setFormState(data);
  }, [params?.formId]);
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">Leads</h2>
      </div>
      <Card className="grid grid-cols-12 gap-6 pb-5">
        <div className="col-span-12 md:col-span-3 justify-items-center flex">
          <h3 className="my-auto text-white font-oxigen text-lg">
            Laporan Leads
          </h3>
        </div>
        <div className="col-span-12 md:col-span-9 md:justify-end flex">
          <Button className="mr-2 " title={'Export'} />
          <Datepicker />
          <BaseInput
            placeholder="Search then enter"
            className="w-auto min-w-0"
          />
        </div>
        <div className="col-span-12">
          <table className="w-full divide-y divide-gray-200 overflow-hidden rounded-default text-left text-sm table">
            <thead className="vtl-thead">
              <tr className="bg-gray-50 text-gray-500  border-b ">
                <th className=" py-2 px-4 font-oxigen">Name</th>
                <th className=" py-2 px-4 font-oxigen">Comment</th>
                <th className=" py-2 px-4 font-oxigen">Phone</th>
                <th className=" py-2 px-4 font-oxigen">Created At</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {formState?.comments?.map((e) => {
                return (
                  <tr key={e?.id}>
                    <td className=" py-2 px-4 font-oxigen">{e?.fullName}</td>
                    <td className=" py-2 px-4 font-oxigen">
                      <p className="text-ellipsis overflow-hidden">
                        {e?.comment}
                      </p>
                    </td>
                    <td className=" py-2 px-4 font-oxigen">{e?.phone}</td>
                    <td className=" py-2 px-4 font-oxigen">{e?.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-span-12">
          <nav
            className="flex items-center justify-between"
            aria-label="Pagination">
            <div className="hidden sm:block">
              <p className="text-sm text-white">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">10</span> of{' '}
                <span className="font-medium">20</span> results
              </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
              <Button
                href="#"
                className="relative inline-flex items-center rounded-md  px-4 py-2 text-sm font-medium text-white">
                Previous
              </Button>
              <Button
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md  px-4 py-2 text-sm font-medium text-white">
                Next
              </Button>
            </div>
          </nav>
        </div>
      </Card>
    </>
  );
};

export default FormView;
