import { Footprints, SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

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
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" alt="cabelo" height={16} width={16} />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" alt="barba" height={16} width={16} />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/sobrancelha.svg"
              alt="sobrancelha"
              height={16}
              width={16}
            />
            Sobrancelha
          </Button>

          <Button className="gap-2" variant="secondary">
            <Footprints size={16} />
            Pézinho
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento.svg"
              alt="acabamento"
              height={16}
              width={16}
            />
            Acabamento
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
        <h3 className="mt-5 text-sm font-semibold uppercase text-stone-400">
          Agendamentos
        </h3>
        <Card className="mt-2">
          <CardContent className="flex items-center justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid pl-2 pr-5">
              <p className="text-center text-sm">Agosto</p>
              <p className="text-center text-2xl font-bold">10</p>
              <p className="text-center text-sm">14:30</p>
            </div>
          </CardContent>
        </Card>

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
