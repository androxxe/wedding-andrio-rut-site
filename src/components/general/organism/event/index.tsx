import { bonheurRoyale, ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Countdown, { CountdownRenderProps } from "react-countdown";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

type ListEventProps = {
  title: string;
  date: string;
  time: string;
  location: string;
};

const ListEvent = (props: ListEventProps) => {
  const { title, date, time, location } = props;

  return (
    <div className="text-center space-y-2 py-8">
      <h2 className={cn(bonheurRoyale.className, "text-4xl text-maroon-700")}>{title}</h2>
      <p className={cn(ebGaramond.className, "text-lg")}>{date}</p>
      <p className={cn(ebGaramond.className, "text-lg")}>{time}</p>
      <p className={cn(ebGaramond.className, "text-lg")}>{location}</p>
    </div>
  );
};

export const Event = () => {
  const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
    return (
      <div className="flex items-center space-x-2 justify-center mt-2">
        <div className="w-20 h-20 bg-white border-maroon-400 rounded-md flex flex-col items-center justify-center">
          <span className={cn(ebGaramond.className, "text-xl font-medium")}>{days}</span>
          <span className="text-xs text-gray-500">Days</span>
        </div>
        <div className="w-20 h-20 bg-white border-maroon-400 rounded-md flex flex-col items-center justify-center">
          <span className={cn(ebGaramond.className, "text-xl font-medium")}>{hours}</span>
          <span className="text-xs text-gray-500">Hours</span>
        </div>
        <div className="w-20 h-20 bg-white border-maroon-400 rounded-md flex flex-col items-center justify-center">
          <span className={cn(ebGaramond.className, "text-xl font-medium")}>{minutes}</span>
          <span className="text-xs text-gray-500">Minutes</span>
        </div>
        <div className="w-20 h-20 bg-white rounded-md flex flex-col items-center justify-center">
          <span className={cn(ebGaramond.className, "text-xl font-medium")}>{seconds}</span>
          <span className="text-xs text-gray-500">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem]">
      <div className="bg-gold-200 h-full flex flex-col rounded-md shadow-sm">
        <div className="relative w-full h-6">
          <Image
            src="/images/theme/general/home-top-ulos.jpg"
            fill
            alt="Ulos"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
        <div className="px-5 py-8 lg:py-10 flex-1 overflow-y-auto">
          <h2 className={cn(viaodaLibre.className, "text-4xl text-center mb-4")}>Save The Date</h2>
          <ListEvent
            title="Pemberkatan Nikah"
            date="Sabtu, 20 April 2024"
            time="09.30 - 11.30 WIB"
            location="Gereja POUK TS1 PT. RAPP"
          />
          <ListEvent
            title="Pesta Adat / Resepsi"
            date="Sabtu, 20 April 2024"
            time="12.00 WIB - Selesai"
            location="Gedung Serbaguna Yeremia, Pkl. Kerinci"
          />
          <div>
            <Countdown date={dayjs("2024-04-20T09:30:00+07:00").toDate()} renderer={renderer} />
            <div className="flex items-center justify-center mt-5 lg:mt-7">
              <Link
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=Andrio%20&%20Rut%20Wedding&dates=20240420T093000/20240420T113000&details=Andrio%20&%20Rut%20Wedding`}
                target="_blank"
                className={cn(ebGaramond.className, "bg-maroon-400 px-3 py-1 rounded-lg text-center text-white")}
              >
                Add to Calendar
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-6">
          <Image
            src="/images/theme/general/home-top-ulos.jpg"
            fill
            alt="Ulos"
            objectFit="cover"
            className="rounded-b-md"
          />
        </div>
      </div>
    </div>
  );
};
