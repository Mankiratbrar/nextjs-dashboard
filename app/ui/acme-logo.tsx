import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana , inter} from '@/app/ui/fonts';
import Nextjsicon from '@/public/icons/Nextjsicon.png';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex justify-center flex-row text-white w-full`}
    >
    <Image 
    alt="Next.js logo"
    width="180"
    height="40" 
    // className='ml-16 mb-1 '
    src="/next.svg"/>

      {/* // <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* // <p className={`${inter.className} text-[44px] font-bold m-2`}>Next JS</p> */}
    </div>
  );
}
