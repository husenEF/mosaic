import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import Card, { CardBody, CardFooter } from '../../components/Card/Card';
import MouseIcon from '../../components/icons/MouseIcon';
import UserBox from '../../components/icons/UserBox';

const RenderBroadCastItem = ({ title, data, slug, children, ...rest }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4" {...rest}>
      <Card title={title} className="px-0 min-h-[250px]" titleClass={'px-5 text-xl mb-0'}>
        {rest?.link ? (
          <div className="px-5  mb-4">
            <p className="text-ellipsis overflow-hidden">
              <a
                href={rest?.link}
                className="inline-flex text-white font-bold items-center text-[11px]">
                <MdOutlineLocalFireDepartment />
                {rest?.link}
              </a>
            </p>
          </div>
        ) : null}
        <CardBody className={'flex-auto'}>
          {children ? (
            children
          ) : (
            <table className="table-fixed text-left text-white font-bold  w-full">
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
          )}
        </CardBody>
        <CardFooter className="">
          {rest?.footer ? (
            rest?.footer()
          ) : (
            <div className="bg-primary bg-opacity-[85%] grid grid-cols-2 divide-x divide-secondary divide-opacity-40">
              <NavLink
                to={`/${slug}/view/${rest?.id}`}
                className="p-4 font-bold text-white text-center">
                Laporan{' '}
              </NavLink>
              <NavLink
                className="p-4 font-bold text-white text-center"
                to={`/${slug}/edit/${rest?.id}`}>
                Edit Form
              </NavLink>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

RenderBroadCastItem.defaultProps = {
  slug: 'form',
};
export default RenderBroadCastItem;
