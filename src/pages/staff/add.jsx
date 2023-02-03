import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card, { CardBody, CardFooter } from '../../components/Card/Card';
import BaseInput from '../../components/input/BaseInput';
import Button from '../../components/button/button';

import { DummyUsers, ROLE } from '../../data/dummyUsers';

const AddForm = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (params.staffId === 'add') setUser(null);
    else {
      const user = DummyUsers.find((e) => e.id.toString() === params.staffId);
      setUser(user);
    }
  }, [params.staffId]);
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">
          {user?.first_name ?? 'Add Staff'}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Card className="px-0 col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-10 xl:col-start-2">
          <CardBody>
            <div className="mb-3">
              <label className="mb-2 text-white inline-block">Name</label>
              <BaseInput
                className="!text-left "
                placeholder="Your Name"
                value={user?.first_name}
              />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-white inline-block">Email</label>
              <BaseInput
                className="!text-left "
                placeholder="Your Email"
                type="email"
                value={user?.email}
              />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-white inline-block">Password</label>
              <BaseInput
                className="!text-left "
                placeholder="Your Password"
                value={user?.password}
              />
            </div>
            <div className="mb-3">
              <label className="mb-2 text-white block">Role</label>
              <select className="form-select">
                {Object.keys(ROLE).map((e) => {
                  const isSelected = e === user?.role;
                  return (
                    <option key={e} selected={isSelected}>
                      {ROLE[e]}
                    </option>
                  );
                })}
              </select>
            </div>
          </CardBody>
          <CardFooter className="justify-end flex py-3 px-3 items-center border-t">
            <Button title="Save" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddForm;
