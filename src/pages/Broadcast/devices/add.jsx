import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';

import Card, { CardBody, CardFooter } from '../../../components/Card/Card';
import BaseInput from '../../../components/input/BaseInput';

import { DummyDevicesData } from '../../../data/dummyDevices';
import { formatDate } from '../../../utils/dateTimeFormat';
import Button from '../../../components/button/button';

const DeviceAdd = () => {
  const params = useParams();
  const [deviceData, setDeviceData] = useState(null);
  useEffect(() => {
    if (params?.id !== 'add') {
      const data = DummyDevicesData?.find((data) => data?.id === params?.id);
      setDeviceData(data);
    }
  }, [params?.id]);
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">
          {deviceData?.deviceName ?? 'Add device'}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        <div className="col-span-8 col-start-3 ">
          <Card prevIcon={AiFillEdit} className="px-0">
            <CardBody>
              <div className="text-white">
                <label className="mb-3" htmlFor="device-name">
                  Name
                </label>
                <BaseInput
                  placeholder="device name"
                  id="device-name"
                  className={'text-left form-input'}
                  value={deviceData?.deviceName ?? ''}
                />
              </div>
              <p className="text-white my-2">
                Status perangkat ini adalah:{' '}
                {deviceData?.status ? 'Connected' : 'Disconnected'}
              </p>
              <p className="text-white my-2">
                Diupdate pada:{' '}
                {formatDate(
                  deviceData?.updatedAt ?? Date.now(),
                  'dd/MM  /yyyy hh:mm',
                )}
              </p>
              <div class="w-6/12 sm:w-4/12 px-4">
                <QRCode
                  value={deviceData?.id ?? 'null'}
                  className="shadow rounded max-w-full h-auto align-middle border-none"
                />
              </div>
              <p className="text-white text-sm my-2">
                Qrcode updated, please scann with your Whatsapp Device
              </p>
            </CardBody>
            <CardFooter className="bg-primary bg-opacity-[85%] grid grid-cols-2 divide-x divide-secondary divide-opacity-40 py-2">
              <button className="text-white">Save</button>
              <button className="text-white">Cancel</button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DeviceAdd;
