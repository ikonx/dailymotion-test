"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const SearchInput = (props: Props) => {
  const router = useRouter();
  const [search, setSearch] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?channel=${search}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={onChange}
        placeholder="Type to search..."
        ref={inputRef}
        className="px-6 py-3 rounded-full border-none color-[--foreground] bg-[--background] focus-visible:outline-none"
      />
    </form>
  );
};

export default SearchInput;
