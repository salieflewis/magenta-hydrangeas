import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Collect } from '../components/Collect';
import { ConnectKitButton } from 'connectkit';
import { IpfsImage } from 'react-ipfs-image';
import magentaHydrangeas from '../assets/magenta_hydrangeas.jpg';

const Home: NextPage = () => {
  return (
    <div className='font-serif max-w-5xl mx-auto'>
      <Head>
        <title>Magenta Hydrangeas</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex justify-end mt-4'>
        <ConnectKitButton />
      </div>

      <main className='max-w-5xl mx-auto'>
        
        {/* <div className='mt-8'>
          <IpfsImage hash='bafybeib3ylafmlp2mlxr2rlqapagvi3fjs5i4xjns7633piy6b6dcykvp4' />
        </div> */}

        {/* <div className='mt-8'>
          <img src='https://ipfs.io/ipfs/bafybeib3ylafmlp2mlxr2rlqapagvi3fjs5i4xjns7633piy6b6dcykvp4' />
        </div> */}

        <div className='mt-8'>
          <Image src={magentaHydrangeas} layout='intrinsic' />
        </div>

        <div className='font-["Neuton"] flex justify-between pb-2'>
          <div>
            <p className='mt-4 font-bold'>
              Salief Lewis, <i>Magenta Hydrangeas</i>, 2022
            </p>
            <p className='mt-2 max-w-md font-light text-[#808080] leading-5'>
              An accidental double exposure led to the juxtaposition of a
              decrepit brownstone and a bloom of magenta hydrangeas.
            </p>
          </div>
          <Collect />
        </div>
      </main>
    </div>
  );
};

export default Home;
