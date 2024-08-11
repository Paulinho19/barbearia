import { Footprints, SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Paulo!</h2>
        <p>Quarta-feira, 07 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image
                src={option.imageUrl}
                alt={option.title}
                height={16}
                width={16}
              />
              {option.title}
            </Button>
          ))}

          <Button className="gap-2" variant="secondary">
            <Footprints size={16} />
            Pézinho
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            alt="banner de agendamento de cortes"
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem />
        <h3 className="mt-5 text-sm font-semibold uppercase text-stone-400">
          Recomendados
        </h3>

        <div className="mt-2 flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h3 className="mt-5 text-sm font-semibold uppercase text-stone-400">
          Populares
        </h3>

        <div className="mt-2 flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="items-center justify-center pr-4 pt-2">
            <p className="mt-2 text-xs font-semibold">
              © 2024 BarberShop. Todos os direitos reservados
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
