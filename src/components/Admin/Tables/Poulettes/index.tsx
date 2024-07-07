import { BackIcon, DindeIcon, SettingsIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
// import { getUsers } from '@/lib/db';
import Link from 'next/link';

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
        <h1 className="font-semibold text-lg md:text-2xl">La Table des Poules | <span className="text-2xl underline underline-offset-4 hover:font-bold decoration-wavy decoration-sky-500">Mostafa PC</span></h1>
      </div>
      <div className='flex items-center mb-10'>
      <Button variant="alternative">
          <Link href="/admin/tables">
            <BackIcon className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="alternative">
          <DindeIcon className="h-5 w-5 mr-1" />
                <Link href="/admin/tables/dindes">Dinde</Link>
        </Button>
        <Button variant="alternative">
          <SettingsIcon className="h-5 w-5 mr-1" />
                <Link href="https://astradev.budibase.app/app/mostafa-pc" target='_blank'>Admin</Link>
        </Button>
      </div>
      <iframe width="100%" height="700" frameBorder="0" style={dinde} allow="clipboard-write;camera;geolocation;fullscreen" src="https://astradev.budibase.app/embed/mostafa-pc"></iframe>
    </main>
  );
}
