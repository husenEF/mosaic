import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineForm, AiOutlineBarChart } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { BiBookmark, BiPlus } from 'react-icons/bi';
import { VscSettings } from 'react-icons/vsc';

import Button from '../../components/button/button';
import BaseInput from '../../components/input/BaseInput';

import { DummyFormData } from '../../data/dummyForm';
import classNames from '../../utils/classnames';
import Card, { CardBody, CardFooter } from '../../components/Card/Card';

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
        <div className="col-span-12 md:col-span-4 md:pl-9 lg:col-span-3 ">
          <ul className="font-medium  flex flex-nowrap md:flex-col md:mx-0 overflow-x-scroll no-scrollbar">
            <li
              className={classNames(
                'pb-1 mr-2 inline-block',
                [tabForm === 'form' ? 'text-primary-70' : 'text-white'],
                ' hover:md:text-primary-50 hover:cursor-pointer',
              )}>
              <button
                className=" whitespace-nowrap inline-flex w-full items-center"
                onClick={() => setTabForm('form')}>
                <AiOutlineForm className="mr-2" /> Form
              </button>
            </li>
            <li
              className={classNames(
                'pb-1 mr-2 inline-block',
                [tabForm === 'response' ? 'text-primary-70' : 'text-white'],
                ' hover:md:text-primary-50 hover:cursor-pointer',
              )}>
              <button
                className=" whitespace-nowrap inline-flex w-full items-center"
                onClick={() => setTabForm('response')}>
                <AiOutlineBarChart className="mr-2" />
                Response
              </button>
            </li>
            <li
              className={classNames(
                'pb-1 mr-2 inline-block',
                [tabForm === 'settings' ? 'text-primary-70' : 'text-white'],
                ' hover:md:text-primary-50 hover:cursor-pointer',
              )}>
              <button
                className=" whitespace-nowrap inline-flex w-full items-center"
                onClick={() => setTabForm('settings')}>
                <VscSettings className="mr-2" />
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 ">
          <Card
            title={'Text'}
            className={classNames('w-9/12 bg-blue-100 mx-auto py-5', [
              tabForm === 'form' ? 'active' : 'hidden',
            ])}
            prevIcon={BiBookmark}>
            <div className="border-dashed border-2 rounded-default p-4 border-secondary-80 w-full h-80 border-1 flex justify-center items-center">
              <Button title={'Add Box'} icon={BiPlus} />
            </div>
            {/* <div className="grid grid-cols-4 gap-3">
              <div className="col-span-2 sm:col-span-4 lg:col-span-2">
                <label htmlFor="label" className='text-white mb-2'>Label</label>
                <BaseInput id="label" />
              </div>
              <div className="col-span-2 sm:col-span-4 lg:col-span-2">
                <label htmlFor="label" className='text-white mb-2'>Label</label>
                <BaseInput id="label" />
              </div>
            </div> */}
          </Card>
          <Card
            title={'Response'}
            className={classNames('w-9/12 bg-blue-100 mx-auto', [
              tabForm === 'response' ? 'active' : 'hidden',
            ])}>
            <div className="border-dashed border-2 rounded-default p-4 border-secondary-80 w-full h-80 border-1 flex justify-center items-center">
              <Button title={'Add Box'} icon={BiPlus} />
            </div>
          </Card>
          <Card
            title={'Form Meta'}
            titleClass={'px-5'}
            className={classNames(
              'w-9/12 bg-blue-100 mx-auto',
              [tabForm === 'settings' ? 'active' : 'hidden'],
              'px-0',
            )}>
            <CardBody>
              <div className="mb-2">
                <label className="text-white" htmlFor="formTitle">
                  Title Form
                </label>
                <BaseInput id="formTitle" />
              </div>
              <div className="mb-2">
                <input
                  id="formSession"
                  type="checkbox"
                  class="form-checkbox rounded text-secondary-80 mr-2"
                />
                <label className="text-white" htmlFor="formSession">
                  Aktifkan Session
                </label>
                <p className="text-sm text-gray-300">
                  jika session di aktifkan, maka lead yang sudah isi form akan
                  langsung di redirect ke halaman response
                </p>
              </div>
              <h3>Domain Setting</h3>
              <div className="">
                <label>Domain</label>
                <BaseInput
                  placeholder="http://domain.com/form"
                  className="text-left"
                />
              </div>
            </CardBody>
            <CardFooter>
              <div className="grid grid-cols-2 divide-x divide-secondary divide-opacity-40 mt-4">
                <Button
                  className="p-4 font-bold text-white text-center !rounded-none"
                  title={'Simpan'}
                />
                <Button
                  className="p-4 font-bold text-white text-center !rounded-none"
                  title="Duplicate"
                />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FormEdit;
