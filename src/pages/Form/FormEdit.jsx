import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

import Button from '../../components/button/button';

import { DummyFormData } from '../../data/dummyForm';
import classNames from '../../utils/classnames';
import Card from '../../components/Card/Card';

const FormEdit = () => {
  const params = useParams();
  const [formState, setFormState] = useState(null);
  const [tabForm, setTabForm] = useState('form');

  useEffect(() => {
    const data = DummyFormData?.find((data) => data?.id === params?.formId);
    setFormState(data);
  }, [params?.formId]);
  console.log({ formState });

  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white font-oxigen">Form</h2>
          <a
            className="text-white inline-flex items-center"
            href={formState?.link}>
            <FiExternalLink className="text-white mr-2" />
            {formState?.link}
          </a>
        </div>
        <div>
          <Button title={'Save Form'} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 ">
          <ul className="text-sm font-medium  flex flex-nowrap md:flex-col md:mx-0 overflow-x-scroll no-scrollbar">
            <li
              className={classNames(
                'pb-1 mr-2',
                [tabForm === 'form' ? 'text-primary-70' : 'text-white'],
                ' hover:md:text-primary-50',
              )}>
              <button
                className=" whitespace-nowrap"
                onClick={() => setTabForm('form')}>
                Form
              </button>
            </li>
            <li
              className={classNames(
                'pb-1 mr-2',
                [tabForm === 'response' ? 'text-primary-70' : 'text-white'],
                ' hover:md:text-primary-50',
              )}>
              <button
                className=" whitespace-nowrap"
                onClick={() => setTabForm('response')}>
                Response
              </button>
            </li>
            <li
              className={classNames(
                'pb-1 mr-2',
                [tabForm === 'settings' ? 'text-primary-70' : 'text-white'],
                ' hover:md:text-primary-50',
              )}>
              <button
                className=" whitespace-nowrap"
                onClick={() => setTabForm('settings')}>
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 ">
          <Card
            title={'Text'}
            className={classNames('w-9/12 bg-blue-100 mx-auto', [
              tabForm === 'form' ? 'active' : 'hidden',
            ])}>
            <h2>Halo</h2>
          </Card>
          <Card
            title={'Response'}
            className={classNames('w-9/12 bg-blue-100 mx-auto', [
              tabForm === 'response' ? 'active' : 'hidden',
            ])}>
            <h2>Halo</h2>
          </Card>
          <Card
            title={'Text'}
            className={classNames('w-9/12 bg-blue-100 mx-auto', [
              tabForm === 'settings' ? 'active' : 'hidden',
            ])}>
            <h2>Settings</h2>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FormEdit;
