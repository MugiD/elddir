import { deleteInfluencer } from "@/actions/action";
import { Button } from "@/components/ui/button";

export default function DeleteAuthors({id, route}: any) {
  const deleteInfluencerWithId = deleteInfluencer.bind(null, id, route);

  return (
    <form action={deleteInfluencerWithId} className="inline">
      <Button type="submit" variant="link" className="p-0">
        Delete
      </Button>
    </form>
  );
}
