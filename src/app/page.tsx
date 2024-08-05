import Add from "@/components/add";
import prisma from "@/lib/db";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const posts = await prisma.category.findMany();
  const user = await currentUser();

  const emailAddress = user?.emailAddresses[0].emailAddress || "anonymous";

  return (
    <main>
      <Add />
      <div className="flex flex-col gap-y-4 mt-4">
        {posts.map(
          (post) =>
            emailAddress === post.authorEmail && (
              <Link href={`/category/${post.id}`} key={post.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
        )}
      </div>
    </main>
  );
}
