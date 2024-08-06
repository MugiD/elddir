"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

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

export async function editCategory(id: number, formData: FormData) {
    await prisma.category.update({
        where: {
            id: Number(id),
        },
        data: {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
        },
    });

    revalidatePath("/category/[id]", "page");
}

export async function deleteCategory(id: number) {
    await prisma.category.delete({
        where: {
            id: Number(id),
        },
    });

    revalidateTag(`/category`);
    redirect("/");
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

    revalidatePath("/category/[id]", "page");
}

export async function deleteInfluencer(id: number, route: number) {
    await prisma.influencers.delete({
        where: {
            id: Number(id),
        },
    });

    revalidatePath("/category/[id]", "page");
    redirect(`/category/${route}`);
}