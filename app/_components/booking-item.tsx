import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <>
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
    </>
  );
};

export default BookingItem;
