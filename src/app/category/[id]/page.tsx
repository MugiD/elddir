import prisma from "@/lib/db";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
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
import AddAuthor from "@/components/category/addAuthor";

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
      influencers: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return (
    <main className="mt-4">
      <Card className="relative">
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
      <AddAuthor categoryId={category?.id} />
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
                <DeleteAuthors id={influencer.id} route={category?.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
