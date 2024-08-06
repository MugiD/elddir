import prisma from "@/lib/db";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import DeleteCategory from "@/components/category/deleteCategory";
import EditCategory from "@/components/category/editCategory";
import DeleteAuthors from "@/components/category/deleteAuthors";
import { createInfluencer } from "@/actions/action";
import { deleteInfluencer } from "@/actions/action";

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
      influencers: true,
    },
  });

  const influencerWithId = createInfluencer.bind(null, params.id);

  return (
    <main className="mt-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{category?.title}</CardTitle>
            <CardDescription>{category?.description}</CardDescription>
          </div>
          <div className="flex flex-row items-center gap-2">
            <EditCategory
              id={category?.id}
              title={category?.title}
              desc={category?.description}
            />
            <DeleteCategory id={category?.id} />
          </div>
        </CardHeader>
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
            <TableHead className="w-[50%]">Username</TableHead>
            <TableHead className="w-[50%] text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {category?.influencers.map((influencer) => (
            <TableRow key={influencer.id}>
              <TableCell className="font-medium w-[50%]">
                <a href={`https://instagram.com/${influencer.username}`}>
                  @{influencer.username}
                </a>
              </TableCell>
              <TableCell className="w-[50%] text-right font-medium">
                <DeleteAuthors id={influencer.id} route={category?.id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
