import { GoPlus } from 'react-icons/go';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

import Button from '../../components/button/button';
import Card from '../../components/Card/Card';

const FormPage = () => {
  return (
    <div className="p-8 w-full max-w-full mx-auto">
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">Form</h2>
        <Button
          icon={GoPlus}
          title="Form"
          onClick={() => console.log('add form')}
        />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-4">
          <Card title={'Bunga'}>
            <a href="" className='inline-flex'>
              <MdOutlineLocalFireDepartment /> https://adminselvi.com/bunga
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
