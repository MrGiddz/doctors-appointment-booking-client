import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategorySearch = () => {
  return (
    <div>
      <div className="mb-10 flex items-center flex-col leading-4 gap-4">
        <h2 className="font-bold text-4xl tracking-wide">
          Search <span className="text-indigo-500">Doctors</span>
        </h2>
        <h3 className="capitalise text-gray-500 text-xl">
          Search your doctor and book appointment in one click
        </h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Search..." />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2"/>
            Search</Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySearch;
