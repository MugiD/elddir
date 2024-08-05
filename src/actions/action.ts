"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";

export async function createCategory(formData: FormData) {
    const user = await currentUser()
    const userEmail = user?.emailAddresses[0].emailAddress || "anonymous";
    await prisma.category.create({
        data: {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            authorEmail: userEmail, 
        },
    });

    revalidatePath("/");
}

export async function deleteCategory(id: number) {
    await prisma.category.delete({
        where: {
            id,
        },
    });

    revalidatePath("/");
}

export async function createInfluencer(categoryId: number, formData: FormData) {
    await prisma.influencers.create({
        data: {
            username: formData.get("influencer") as string,
            category: {
                connect: {
                    id: Number(categoryId),
                },
            }
        },
    });

    revalidatePath(`/category/${categoryId}`);
}