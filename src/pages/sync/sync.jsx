import { useAtom } from 'jotai';
import { dataAtom, deleteUserAtom } from '../../atom/atom1';

const Sync = () => {
  const [data] = useAtom(dataAtom);
  const [, deleteUser] = useAtom(deleteUserAtom);

  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-8 p-8">
        {data.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg shadow-md w-[300px] p-6 bg-white hover:shadow-lg transition-shadow"
            >
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <h2 className="text-lg text-gray-600 mt-2">Age: {user.age}</h2>
              <h2 className="text-lg font-semibold mt-3">
                Status:{' '}
                <span className={user.status ? 'text-green-600' : 'text-red-600'}>
                  {user.status ? 'Active' : 'Inactive'}
                </span>
              </h2>

              <button
                onClick={() => deleteUser(user.id)}
                className="mt-6 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
        ))}
      </div>
    </>
  );
};

export default Sync;