import { NavLink } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { CiViewList } from 'react-icons/ci';
import { RiSendPlaneLine } from 'react-icons/ri';
import { HiDeviceMobile } from 'react-icons/hi';

import Button from '../../components/button/button';
import Card, { CardBody, CardFooter } from '../../components/Card/Card';
import RenderBroadCastItem from '../component/BroadcastItem';

import { DummyFormData } from '../../data/dummyForm';

const CampaignPage = () => {
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">
          Broadcast campaign
        </h2>
        <Button
          icon={GoPlus}
          title="Create Campaign"
          onClick={() => console.log('add broadcast')}
        />
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <Card
            title="List"
            className="px-0"
            titleClass={'px-5 text-2xl text-oxigen font-bold'}
            prevIcon={CiViewList}>
            <CardBody className={'flex-auto'}>
              <h3 className="text-4xl text-white font-oxigen font-bold">1</h3>
            </CardBody>
            <CardFooter className="">
              <div className="bg-primary bg-opacity-[85%] grid grid-cols-2 divide-x divide-secondary divide-opacity-40">
                <NavLink
                  to={`/broadcast/list`}
                  className="p-4 font-bold text-white text-center">
                  View List
                </NavLink>
                <NavLink
                  className="p-4 font-bold text-white text-center justify-center flex items-center"
                  to={`/broadcast/list/add`}>
                  <GoPlus className="mr-2" /> List
                </NavLink>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <Card
            title="Campaigns"
            className="px-0"
            titleClass={'px-5 text-2xl text-oxigen font-bold'}
            prevIcon={RiSendPlaneLine}>
            <CardBody className={'flex-auto'}>
              <h3 className="text-4xl text-white font-oxigen font-bold">1</h3>
            </CardBody>
            <CardFooter className="">
              <div className="bg-primary bg-opacity-[85%] grid grid-cols-2 divide-x divide-secondary divide-opacity-40">
                <NavLink
                  to={`/broadcast`}
                  className="p-4 font-bold text-white text-center">
                  Show Campaings
                </NavLink>
                <NavLink
                  className="p-4 font-bold text-white text-center justify-center flex items-center"
                  to={`/broadcast/add`}>
                  <GoPlus className="mr-2" /> Campaigs
                </NavLink>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <Card
            title="Devices"
            className="px-0"
            titleClass={'px-5 text-2xl text-oxigen font-bold'}
            prevIcon={HiDeviceMobile}>
            <CardBody className={'flex-auto'}>
              <h3 className="text-4xl text-white font-oxigen font-bold">1</h3>
            </CardBody>
            <CardFooter className="">
              <div className="bg-primary bg-opacity-[85%] grid grid-cols-2 divide-x divide-secondary divide-opacity-40">
                <NavLink
                  to={`/broadcast/devices`}
                  className="p-4 font-bold text-white text-center">
                  View Devices
                </NavLink>
                <NavLink
                  className="p-4 font-bold text-white text-center justify-center flex items-center"
                  to={`/broadcast/devices/add`}>
                  <GoPlus className="mr-2" /> Devices
                </NavLink>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div class="col-span-12 mt-4">
          <h2 className="text-white font-bold text-xl mb-4">Campaigns</h2>
          {DummyFormData?.map((e) => (
            <RenderBroadCastItem
              key={e.title}
              data={e.data}
              title={e.title}
              className="mb-4"
              slug="broadcast"
              {...e}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CampaignPage;
