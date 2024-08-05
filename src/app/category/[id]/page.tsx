import prisma from "@/lib/db";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createInfluencer } from "@/actions/action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InfluencersProps {
  params: {
    id: number;
    title: string;
  };
}

export default async function Influencers({ params }: InfluencersProps) {
  const category = await prisma.category.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
        influencers: true
    }
  });


  const influencerWithId = createInfluencer.bind(null, params.id);

  return (
    <main className="mt-4">
      <Card>
        <CardHeader>
          <CardTitle>{category?.title}</CardTitle>
          <CardDescription>{category?.description}</CardDescription>
        </CardHeader>
        {/* Add edit, and remove buttons */}
      </Card>
      <form action={influencerWithId} className="flex mt-4 justify-between">
        <Input
          id="influencer"
          name="influencer"
          placeholder="username..."
          className="w-[75%]"
        />
        <Button className="w-[20%]" type="submit">
          Add
        </Button>
      </form>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Username</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {category?.influencers.map((influencer) => (
            <TableRow key={influencer.id}>
              <TableCell className="font-medium"><a href={`https://instagram.com/${influencer.username}`}>{influencer.username}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
