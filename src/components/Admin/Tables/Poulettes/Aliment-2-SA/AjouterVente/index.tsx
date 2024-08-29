"use client";

import { BackIcon, DindeIcon, SettingsIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AjouterVente() {
  const router = useRouter();

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
        <Button variant="alternative" className="flex items-center gap-1" onClick={() => router.push('/admin/tables')}>
          <BackIcon className="h-5 w-5" />
        </Button>
        <Button variant="alternative" className="flex items-center gap-1" onClick={() => router.push('/admin/tables/dindes')}>
          <DindeIcon className="h-5 w-5" />
          Dinde
        </Button>
        <Button variant="alternative" className="flex items-center gap-1" onClick={() => window.open('https://airtable.com/appJvZpbixGGfkieH/pagP00mD1dV6tPNBb', '_blank')}>
          <SettingsIcon className="h-5 w-5" />
          Admin
        </Button>
      </div>
      <hr />
      <div className='flex flex-wrap items-center gap-2 mb-2 mt-4'>
        <Button variant="clicked" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes')}>
        Aliment Sahil / Sofalim
        </Button>
        <Button variant="alternative" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes/vente-pc')}>
          Vente PC
        </Button>
        <Button variant="alternative" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes/poussins')}>
          Poussins
        </Button>
        <Button variant="alternative" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes/reglement')}>
          Reglement
        </Button>
      </div>
      <hr />
      <div className='flex flex-wrap items-center gap-2 mb-10 mt-4'>
        <Button variant="alternative" className="flex items-center gap-1" onClick={() => router.push('/admin/tables/poulettes')}>
          <BackIcon className="h-5 w-5" />
        </Button>
        <Button variant="clicked" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes/aliment-2-sa')}>
          Aliment Sahil
        </Button>
        <Button variant="alternative" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes/aliment-so')}>
          Aliment Sofalim
        </Button>
      </div>
      <div className='flex flex-wrap items-center gap-2 mb-10 mt-4'>
        <Button variant="alternative" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes/aliment-2-sa')}>
          View
        </Button>
        <Button variant="selected" className="flex items-center" onClick={() => router.push('/admin/tables/poulettes/aliment-2-sa/ajouter')}>
          Ajouter
        </Button>
      </div>
      <iframe className="airtable-embed" src="https://airtable.com/embed/appJvZpbixGGfkieH/pagTXKCH7T2frCXn3/form" frameBorder="0" width="100%" height="1533"></iframe>
    </main>
  );
}
