import { SquarePen } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editCategory } from "@/actions/action";

export default function DeleteCategory({ id, title, desc }: any) {
  const editCategoryById = editCategory.bind(null, id);

  return (
    <main>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm">
            <SquarePen />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit category</DialogTitle>
            <DialogDescription>
              Are you sure you want to edit this category?
            </DialogDescription>
          </DialogHeader>
          <form action={editCategoryById}>
            <div className="grid gap-5 py-4">
              <div className="flex flex-col gap-y-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue={title} />
              </div>
              <div className="flex flex-col gap-y-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  defaultValue={desc}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Edit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
