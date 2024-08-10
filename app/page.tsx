import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

export default function Home() {
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

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            alt="banner de agendamento de cortes"
            className="rounded-xl object-cover"
          />
        </div>
        <h3 className="mt-5 text-sm font-semibold text-stone-400">
          AGENDAMENTOS
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
      </div>
    </div>
  );
}
