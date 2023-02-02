import { GoPlus } from 'react-icons/go';

import Button from '../../components/button/button';
import Card, { CardBody } from '../../components/Card/Card';

const StaffPage = () => {
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
        <div className="col-span-12 col-start-1 md:col-span-8 md:col-start-3 xl:col-span-10 xl:col-start-2 bg-red-300">
          <Card className="px-0">
            <CardBody>
              <h2>table</h2>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
