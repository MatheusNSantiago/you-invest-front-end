import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

type SearchbarProps = {
  onClick: (value: string) => void;
  defaultValue?: string;
};

function Searchbar({ onClick, defaultValue }: SearchbarProps) {
  const [url, setUrl] = React.useState(defaultValue || "");
  return (
    <div className="flex items-center pt-5 p-5 space-x-2 w-full border">
      <Input
        className="text-white bg-background"
        type="text"
        defaultValue={defaultValue}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button type="submit" onClick={() => onClick(url)}>
        Processar
      </Button>
    </div>
  );
}

export default Searchbar;
