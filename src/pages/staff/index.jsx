import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';

import Button from '../../components/button/button';
import Card, { CardBody } from '../../components/Card/Card';
import BaseInput from '../../components/input/BaseInput';

import { DummyUsers, ROLE } from '../../data/dummyUsers';
import { formatDate } from '../../utils/dateTimeFormat';

const StaffPage = () => {
  const getRole = (role = '01') => {
    return ROLE[role];
  };
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">Staff</h2>
        <Button
          icon={GoPlus}
          title="New Staff"
          onClick={() => console.log('add New Staff')}
        />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Card className="px-0 col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-10 xl:col-start-2">
          <CardBody>
            <div className="flex justify-end mb-4 ">
              <BaseInput placeholder="Search" className="!text-left max-w-xs" />
            </div>
            <table className="w-full divide-y text-white overflow-hidden rounded-default text-left text-sm table">
              <thead className="vtl-thead">
                <tr className="">
                  <th className="py-2 px-4 font-medium">Name </th>
                  <th className="py-2 px-4 font-medium">Email </th>
                  <th className="py-2 px-4 font-medium">Role </th>
                  <th className="py-2 px-4 font-medium">Created At </th>
                  <th className="py-2 px-4 font-medium">Actions </th>
                </tr>
              </thead>
              <tbody className="">
                {DummyUsers.map((user) => {
                  return (
                    <tr key={user?.id}>
                      <td className="px-4 py-2">{user?.first_name}</td>
                      <td className="px-4 py-2">{user?.email}</td>
                      <td className="px-4 py-2">{getRole(user?.role)}</td>
                      <td className="px-4 py-2">
                        {formatDate(user?.createdAt, 'dd/MM/Y')}
                      </td>
                      <td className="px-4 py-2">
                        <span className="isolate inline-flex rounded-md shadow-sm">
                          <Link
                            to={`/staff/${user?.id}`}
                            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-blue-400 px-2 py-1 text-xs font-medium">
                            Edit
                          </Link>

                          <button
                            type="button"
                            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-red-600 px-2 py-1 text-xs font-medium">
                            Delete
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default StaffPage;
