"use client";

import { createInfluencer } from "@/actions/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AddAuthor({ categoryId }: any) {
  const createInfluencerWithId = createInfluencer.bind(null, categoryId);
  const [author, setAuthor] = useState("");

  return (
    <main>
      <form
        action={createInfluencerWithId}
        onSubmit={() => setAuthor("")}
        className="flex mt-4 justify-between"
      >
        <Input
          id="influencer"
          name="influencer"
          placeholder="username..."
          className="w-[75%]"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <Button className="w-[20%]" type="submit" disabled={author === ''}>
          Add
        </Button>
      </form>
    </main>
  );
}
