import { useNavigate } from 'react-router-dom';

import { DEFAULT_FORMAT, formatDate } from '../../../utils/dateTimeFormat';
import Button from '../../../components/button/button';
import Card, { CardBody, CardFooter } from '../../../components/Card/Card';
import DatePicker from '../../../components/Datepicker';
import BaseInput from '../../../components/input/BaseInput';

import { DummyContact } from '../../../data/dummyContact';

const AddNewList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">
          Broadcast List
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        <div className="col-span-12 md:col-span-4">
          <Card className="mb-4 px-0 min-h-[200px]">
            <CardBody className="flex-1">
              <label className="mb-2 inline-block text-white" htmlFor="title">
                Title
              </label>
              <BaseInput
                id="title"
                placeholder="New List"
                className="!text-left"
              />
            </CardBody>
            <CardFooter className=" justify-end flex py-3 px-3 border-t">
              <Button title="Save" className="!px-5" />
            </CardFooter>
          </Card>
          <Card className="mb-4 px-0 min-h-[200px]">
            <CardBody className="flex-1">
              <label className="mb-2 inline-block text-white" htmlFor="file">
                Import File Excel
              </label>
              <input id="title" type="file" />
            </CardBody>
            <CardFooter className=" justify-end flex py-3 px-3 border-t items-center">
              <a href="#" className="text-white mr-3 hover:text-gray-200">
                Download template
              </a>
              <Button title="Import" className="!px-5" />
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Card className="px-0">
            <CardBody className="grid grid-cols-12 gap-6 pb-5">
              <div className="col-span-12 md:col-span-3 justify-items-center flex">
                <h3 className="my-auto text-white font-oxigen text-lg">
                  Contacts
                </h3>
              </div>
              <div className="col-span-12 md:col-span-9 md:justify-end flex">
                <Button className="mr-2 " title={'Export'} />
                <DatePicker />
                <BaseInput
                  placeholder="Search then enter"
                  className="w-auto min-w-0"
                />
              </div>
              <table className="w-full divide-y divide-gray-200 overflow-hidden rounded-10 text-left text-sm table col-span-12">
                <thead className="vtl-thead">
                  <tr className="bg-gray-50 text-gray-500   ">
                    <th className="py-2 px-4 font-medium">Name </th>
                    <th className="py-2 px-4 font-medium">Phone </th>
                    <th className="py-2 px-4 font-medium">Status </th>
                    <th className="py-2 px-4 font-medium">Updated at </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-50">
                  {DummyContact.map((e) => (
                    <tr key={e.id}>
                      <td className="px-4 py-2">{e.fullName}</td>
                      <td className="px-4 py-2">{e.phone}</td>
                      <td className="px-4 py-2">
                        {e?.status ? 'subscribed' : 'un-subscribed'}
                      </td>
                      <td className="px-4 py-2">
                        {formatDate(e?.updateAt, DEFAULT_FORMAT)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};
export default AddNewList;
