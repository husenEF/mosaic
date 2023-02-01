import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Flatpickr from 'react-flatpickr';

import Card, { CardBody, CardFooter } from '../../components/Card/Card';
import BaseInput from '../../components/input/BaseInput';

import { DummyContactList } from '../../data/dummyContact';
import Datepicker from '../../components/Datepicker';
import Button from '../../components/button/button';

const CreateCampaign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContacts, setSelectedContact] = useState([]);
  function isSelected(value) {
    return selectedContacts.find((el) => el.name === value) ? true : false;
  }
  function handleSelect(value) {
    const isSelecteds = isSelected(value);
    console.log({ select: value, isSelecteds: !isSelecteds });
    if (!isSelected(value)) {
      const selectedContactsUpdated = [
        ...selectedContacts,
        DummyContactList.find((el) => el.name === value),
      ];
      console.log({ selectedContactsUpdated });
      setSelectedContact(selectedContactsUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    console.log({ u: value });
    const selectedContactsUpdated = selectedContacts.filter(
      (el) => el.name !== value,
    );
    setSelectedContact(selectedContactsUpdated);
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">
          New Campaign
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        <Card className="px-0 md:col-span-8 md:col-start-3 col-span-12 col-start-1 xl:col-span-8 xl:col-start-3 ">
          <CardBody className="px-3 flex-1 border-b">
            <div className="block mb-2">
              <label className="mb-2 text-white " htmlFor="title">
                Title
              </label>
              <BaseInput
                className="!text-left w-full"
                placeholder="New Campaign"
              />
            </div>
            <div className="block">
              <Listbox
                as="div"
                className="space-y-1"
                value={selectedContacts}
                onChange={(value) => {
                  console.log('a', value);
                  handleSelect(value);
                }}
                open={isOpen}>
                {() => (
                  <>
                    <Listbox.Label className="block text-sm leading-5 font-medium text-white mb-2">
                      Kontak
                    </Listbox.Label>
                    <div className="relative">
                      <span className="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button
                          className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          onClick={() => setIsOpen(!isOpen)}
                          open={isOpen}>
                          <span className="block text-primary-50">
                            {selectedContacts.length < 1
                              ? 'Select persons'
                              : `Selected persons (${selectedContacts.length})`}
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                              className="h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor">
                              <path
                                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Listbox.Button>
                      </span>

                      <Transition
                        unmount={false}
                        show={isOpen}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                        <Listbox.Options
                          static
                          className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">
                          {DummyContactList.map((contact) => {
                            const selected = isSelected(contact?.name);
                            return (
                              <Listbox.Option
                                key={contact?.id}
                                value={contact?.name}>
                                {({ active }) => (
                                  <div
                                    className={`${
                                      active
                                        ? 'text-white bg-blue-600'
                                        : 'text-gray-900'
                                    } cursor-default select-none relative py-2 pl-8 pr-4`}>
                                    <span
                                      className={`${
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal'
                                      } block truncate`}>
                                      {contact?.name}- ({contact?.count})
                                    </span>
                                    {selected && (
                                      <span
                                        className={`${
                                          active
                                            ? 'text-white'
                                            : 'text-primary-70'
                                        } absolute inset-y-0 left-0 flex items-center pl-1.5`}>
                                        <svg
                                          className="h-5 w-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor">
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    )}
                                  </div>
                                )}
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                      <div className="pt-1 text-sm">
                        {selectedContacts.length > 0 && (
                          <>
                            Selected Contact:{' '}
                            {selectedContacts.map((e) => e.name).join(', ')}
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className="block mb-2">
              <label className="mb-2 text-white block" htmlFor="text">
                Whatsapp text
              </label>
              <textarea
                id="text"
                className="border p-1 rounded w-full border-primary-50 focus:border-none">
                Hai [name], live Facebook jam 9 pagi ya
              </textarea>
            </div>
            <div className="block mb-2">
              <label className="mb-2 text-white block" htmlFor="schedule">
                Schedule
              </label>
              <Flatpickr
                options={{
                  enableTime: true,
                  dateFormat: 'Y-m-d H:i',
                }}
              />
            </div>
          </CardBody>
          <CardFooter className="justify-end flex py-3 px-3 items-center">
            {/* <button className=''>Save </button> */}
            <Button title="Delete" className="bg-red-500 mr-2" />
            <Button title="Save as draft" className="bg-yellow-500 mr-2" />
            <Button title="Schedule campaing" />
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default CreateCampaign;
