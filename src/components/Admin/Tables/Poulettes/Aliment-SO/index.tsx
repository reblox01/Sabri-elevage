import { BackIcon, DindeIcon, SettingsIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function AlimentSO({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {

  let dinde = {
    border: '1px solid rgb(226, 232, 240)',
    borderRadius: '6px',
    marginTop: '10px',
    background: 'transparent',
  };

  return (
    <main className="flex flex-1 flex-col p-4 md:p-20 mt-20">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">
          La Table des Poules |
          <span className="text-2xl underline underline-offset-4 hover:font-bold decoration-wavy decoration-sky-500"> Mostafa PC</span>
        </h1>
      </div>
      <div className='flex flex-wrap items-center gap-2 mb-2'>
        <Button variant="alternative" className="flex items-center gap-1">
          <Link href="/admin/tables">
            <BackIcon className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="alternative" className="flex items-center gap-1">
          <DindeIcon className="h-5 w-5" />
          <Link href="/admin/tables/dindes">Dinde</Link>
        </Button>
        <Button variant="alternative" className="flex items-center gap-1">
          <SettingsIcon className="h-5 w-5" />
          <Link href="https://airtable.com/appJvZpbixGGfkieH/pagx7FGtrcTI3pokQ" target='_blank'>Admin</Link>
        </Button>
      </div>
      <hr />
      <div className='flex flex-wrap items-center gap-2 mb-10 mt-4'>
        <Button variant="alternative" className="flex items-center">
          <Link href="/admin/tables/poulettes/Aliment-1">Aliment 1</Link>
        </Button>
        <Button variant="alternative" className="flex items-center">
          <Link href="/admin/tables/poulettes/Aliment-2-SA">Aliment 2 SA</Link>
        </Button>
        <Button variant="alternative" className="flex items-center">
          <Link href="/admin/tables/poulettes/Aliment-SO">Aliment SO</Link>
        </Button>
        <Button variant="alternative" className="flex items-center">
          <Link href="/admin/tables/poulettes/Vente-PC">Vente PC</Link>
        </Button>
        <Button variant="alternative" className="flex items-center">
          <Link href="/admin/tables/poulettes/Poussins">Poussins</Link>
        </Button>
        <Button variant="alternative" className="flex items-center">
          <Link href="/admin/tables/poulettes/Reglement">Reglement</Link>
        </Button>
      </div>
      <li className="font-bold text-lg md:text-2xl mb-3 ml-5 mt-5">Aliment SO</li>
      <iframe className="airtable-embed" src="https://airtable.com/embed/appJvZpbixGGfkieH/shr9dnJjIAn6EDn5I?viewControls=on" frameBorder="0" width="100%" height="533" style={dinde}></iframe>
    </main>
  );
}
