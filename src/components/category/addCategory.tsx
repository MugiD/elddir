import { Button } from "@/components/ui/button";
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
import { createCategory } from "@/actions/action";

export default function Add() {
  return (
    <main>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-4" size="sm">
            Add Category
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add category</DialogTitle>
            <DialogDescription>
              Fill out the form below to add a new category
            </DialogDescription>
          </DialogHeader>
          <form action={createCategory}>
            <div className="grid gap-5 py-4">
              <div className="flex flex-col gap-y-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Cooking" />
              </div>
              <div className="flex flex-col gap-y-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="my first category"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Add</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
