import Button from "../Button";
import { SearchIcon } from "../../icons";
import { ComponentPropsWithoutRef } from "react";

interface SearchInputProps extends ComponentPropsWithoutRef<"input"> {}

function SearchInput({ ...props }: SearchInputProps) {
  return (
    <div className="flex justify-between items-center w-full px-3 py-2 bg-white rounded-md">
      <input type="text" className="outline-none text-base flex-1 pr-4" {...props} />
      <Button type="submit">
        <SearchIcon/>
      </Button>
    </div>
  );
}

export default SearchInput;
