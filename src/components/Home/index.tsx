// import { getUsers } from '@/lib/db';
// import { UsersTable } from './users-table';
// import { Search } from './search';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DindeIcon, PouletIcon } from '@/components/icons';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  // const { users, newOffset } = await getUsers(search, Number(offset));

  let dinde = {
    border: '1px solid rgb(226, 232, 240)',
    borderRadius: '6px',
    marginTop: '10px',
  }

  return (
    <main className="flex flex-1 flex-col p-4 md:p-20 mt-20">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Les Tables</h1>
      </div>
      <div className='flex items-center mb-10'>
        <Button variant="outline">
          <DindeIcon className="h-5 w-5 mr-1" />
                <Link href="/dindes">Dindes</Link>
        </Button>
        <Button variant="outline" className='ml-4'>
          <PouletIcon className="h-5 w-5 mr-1" />
                <Link href="/poulettes">Poulettes - Mostafa PC</Link>
        </Button>
      </div>
      <li className="font-bold text-lg md:text-2xl mb-3 ml-5">Dinde</li>
      <iframe width="100%" height="700" frameBorder="0" style={dinde} allow="clipboard-write;camera;geolocation;fullscreen" src="https://astradev.budibase.app/embed/dinde"></iframe>
      <li className="font-bold text-lg md:text-2xl mt-20 mb-3 ml-5">Poulettes | Mostafa PC</li>
      <iframe width="100%" height="700" frameBorder="0" style={dinde} allow="clipboard-write;camera;geolocation;fullscreen" src="https://astradev.budibase.app/embed/mostafa-pc"></iframe>
    </main>
  );
}