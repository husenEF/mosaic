import { GoPlus } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';

import { DEFAULT_FORMAT, formatDate } from '../../../utils/dateTimeFormat';

import Button from '../../../components/button/button';
import Datepicker from '../../../components/Datepicker';
import BaseInput from '../../../components/input/BaseInput';

import { DummyDevicesData } from '../../../data/dummyDevices';

const DevicesList = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigens">Devices</h2>
        <Button
          icon={GoPlus}
          title="Create Devices"
          onClick={() => navigation('/broadcast/devices/add')}
        />
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5 justify-items-center">
        <div className="col-span-12 col-start-1 xl:col-start-3 xl:col-span-8 w-full bg-secondary-50 rounded-10 p-4 grid grid-cols-6">
          <div className="col-span-2 flex items-center">
            <h3 className="text-white font-bold text-lg">Devices</h3>
          </div>
          <div className="col-span-4 flex">
            <Datepicker />
            <BaseInput
              placeholder="Search then enter"
              className="w-auto min-w-0"
            />
          </div>
          <div className="col-span-12 mt-3">
            <table className="w-full divide-y divide-gray-200 overflow-hidden rounded-10 text-left text-sm table">
              <thead className="vtl-thead">
                <tr className="bg-gray-50 text-gray-500   ">
                  <th className="py-2 px-4 font-medium">Name </th>
                  <th className="py-2 px-4 font-medium">Status </th>
                  <th className="py-2 px-4 font-medium">Updated at </th>
                </tr>
              </thead>
              <tbody className="bg-gray-50">
                {DummyDevicesData.map((e) => (
                  <tr key={e.id}>
                    <td className="px-4 py-2">
                      <Link
                        className="text-primary-70 hover:text-primary-50  border-primary-200 border-b border-dotted font-medium"
                        to={`/broadcast/devices/${e.id}`}>
                        {e.deviceName}
                      </Link>
                    </td>
                    <td className="px-4 py-2">
                      {e?.status ? 'connected' : 'disconnected'}
                    </td>
                    <td className="px-4 py-2">
                      {formatDate(e?.updatedAt, DEFAULT_FORMAT)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevicesList;
