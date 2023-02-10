import { GoPlus } from 'react-icons/go';
import { BsChat, BsTrash } from 'react-icons/bs';
import { IoMdPerson } from 'react-icons/io';

import Button from '../../../components/button/button';
import RenderBroadCastItem from '../../component/BroadcastItem';
import { Link, useNavigate } from 'react-router-dom';

const BroadcastList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col xs:flex-row xs:justify-between mb-8">
        <h2 className="text-2xl font-bold text-white font-oxigens">
          Broadcast List
        </h2>
        <Button
          icon={GoPlus}
          title="Create List"
          onClick={() => navigate('/broadcast/list/add')}
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
                    <Link
                      to={`/broadcast/list/1`}
                      className="p-4 font-bold text-white text-center flex items-center justify-center">
                      <BsChat className="mr-2" /> Daftar Kontak
                    </Link>
                    <Link
                      className="p-4 font-bold text-primary-70 text-center flex items-center justify-center"
                      to={`/broadcast/list/kontak/hapus/1`}>
                      <BsTrash className="mr-2" /> Hapus
                    </Link>
                  </div>
                );
              }}>
              <div className="flex flex-col">
                <h3 className="text-white font-oxigens font-bold mb-4">
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
