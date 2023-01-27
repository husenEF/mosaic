import { GoPlus } from 'react-icons/go';
import { BsChat, BsTrash } from 'react-icons/bs';
import { IoMdPerson } from 'react-icons/io';

import Button from '../../../components/button/button';
import RenderBroadCastItem from '../../component/BroadcastItem';

const BroadcastList = () => {
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigen">
          Broadcast List
        </h2>
        <Button
          icon={GoPlus}
          title="Create List"
          onClick={() => console.log('add list')}
        />
      </div>
      <div className="grid grid-cols-12 gap-6 pb-5">
        {[...Array(10).keys()].map((e) => {
          return (
            <RenderBroadCastItem
              key={e}
              title={`Kontak list ${e}`}
              data={{ link: '' }}
              slug="broadcast/list"
              footer={() => {
                return (
                  <div className="bg-primary bg-opacity-[85%] grid grid-cols-2 divide-x divide-secondary divide-opacity-40">
                    <button
                      to={`/broadcast/list/kontak/1`}
                      className="p-4 font-bold text-white text-center flex items-center justify-center">
                      <BsChat className="mr-2" /> Daftar Kontak
                    </button>
                    <button
                      className="p-4 font-bold text-primary-70 text-center flex items-center justify-center"
                      to={`/broadcast/list/kontak/hapus/1`}>
                      <BsTrash className="mr-2" /> Hapus
                    </button>
                  </div>
                );
              }}>
              <div className="flex flex-col">
                <h3 className="text-white font-oxigen font-bold mb-4">
                  Kontak
                </h3>
                <p className="text-white flex items-center">
                  <IoMdPerson className="mr-2" /> 1 Kontak
                </p>
              </div>
            </RenderBroadCastItem>
          );
        })}
      </div>
    </>
  );
};

export default BroadcastList;