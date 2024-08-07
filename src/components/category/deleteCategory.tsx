import { Trash } from 'lucide-react'
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "@/components/ui/dialog";
  import { deleteCategory } from "@/actions/action";

export default function DeleteCategory({id}: any) {
    const deleteCategoryById = deleteCategory.bind(null, id);

    return (
        <main>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="destructive" size="sm" className='h-full w-[10%] absolute right-0 top-0 rounded-l-none'>
                        <Trash />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete category</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this category?
                        </DialogDescription>
                    </DialogHeader>
                    <form action={deleteCategoryById}>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Delete</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </main>
    )
}