import { GoPlus } from 'react-icons/go';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import Button from '../../components/button/button';
import Card, { CardBody, CardFooter } from '../../components/Card/Card';
import MouseIcon from '../../components/icons/MouseIcon';
import UserBox from '../../components/icons/UserBox';

import { DummyFormData } from '../../data/dummyForm';

const FormDashboard = () => {
  const RenderDummyBox = ({ title, data, ...rest }) => {
    return (
      <div class="col-span-12 md:col-span-6 lg:col-span-4" {...rest}>
        <Card title={title} className="px-0" titleClass={'px-5'}>
          <div className="flex-1 px-5  ">
            <p className="text-ellipsis overflow-hidden">
              <a
                href={rest?.link}
                className="inline-flex text-white font-bold items-center">
                <MdOutlineLocalFireDepartment />
                {rest?.link}
              </a>
            </p>
          </div>
          <CardBody className={'flex-auto'}>
            <table class="table-fixed text-left text-white font-bold  w-full">
              <thead>
                <tr>
                  <th>Hari ini</th>
                  <th>Total Lead</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex jus items-center">
                      <UserBox className="mr-2" />
                      {data?.today?.lead} Lead
                    </div>
                  </td>
                  <td>
                    <div className="flex jus items-center">
                      <UserBox className="mr-2" />
                      {data?.total?.lead} lead
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex jus items-center">
                      <MouseIcon className="mr-2" />
                      {data?.today?.click} Click
                    </div>
                  </td>
                  <td>
                    <div className="flex jus items-center">
                      <MouseIcon className="mr-2" />
                      {data?.total?.click} click
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="">
            <div className="bg-primary bg-opacity-[85%] grid grid-cols-2 divide-x divide-secondary divide-opacity-40">
              <NavLink
                to={`/form/view/${rest?.id}`}
                className="p-4 font-bold text-white text-center">
                Laporan{' '}
              </NavLink>
              <NavLink
                className="p-4 font-bold text-white text-center"
                to={`/form/edit/${rest?.id}`}>
                Edit Form
              </NavLink>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  };

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
          <RenderDummyBox key={e.title} data={e.data} title={e.title} {...e} />
        ))}
      </div>
    </>
  );
};

export default FormDashboard;