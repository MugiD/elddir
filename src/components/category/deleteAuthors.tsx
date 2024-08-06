import { deleteInfluencer } from "@/actions/action";
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

export default function DeleteAuthors({ id, route }: any) {
  const deleteInfluencerWithId = deleteInfluencer.bind(null, id, route);

  return (
    <main>
      <Dialog>
        <DialogTrigger asChild>
          <Button type="submit" variant="link" className="p-0">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete category</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this category?
            </DialogDescription>
          </DialogHeader>
          <form action={deleteInfluencerWithId}>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Delete</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
