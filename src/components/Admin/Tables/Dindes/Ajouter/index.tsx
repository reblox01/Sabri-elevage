"use client";

import { BackIcon, PouletIcon, SettingsIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AjouterAchat() {
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
        <h1 className="font-semibold text-lg md:text-2xl">La Table des Dindes</h1>
      </div>
      <div className='flex flex-wrap items-center gap-2 mb-10'>
        <Button variant="alternative" className="flex items-center gap-1">
          <Link href="/admin/tables">
            <BackIcon className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="alternative" className="flex items-center gap-1">
          <PouletIcon className="h-5 w-5" />
          <Link href="/admin/tables/poulettes">Poulettes Chaire</Link>
        </Button>
        <Button variant="alternative" className="flex items-center gap-1" onClick={() => window.open('https://airtable.com/app0iPVtu3qtXyr7a/pag39PcYhbOzwD7tw', '_blank')}>
          <SettingsIcon className="h-5 w-5" />
          Admin
        </Button>
      </div>
      <div className='flex flex-wrap items-center gap-2 mt-4'>
        <Button variant="alternative" className="flex items-center" onClick={() => router.push('/admin/tables/dindes')}>
          View
        </Button>
        <Button variant="selected" className="flex items-center" onClick={() => router.push('/admin/tables/dindes/ajouter')}>
          Ajouter
        </Button>
      </div>
      <iframe className="airtable-embed" src="https://airtable.com/embed/app0iPVtu3qtXyr7a/pagCyn4PshdR83tFe/form" frameBorder="0" width="100%" height="1920"></iframe>
    </main>
  );
}
