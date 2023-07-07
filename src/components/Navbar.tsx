import Image from "next/image";
import { Menu } from "./ui/Menu";
import { SearchInput } from "./ui/SearchInput";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full px-5 py-3 flex items-center justify-between bg-[#E2F3F3]">
      <div className="flex items-center text-4xl font-semibold font-serif">
        <Image src="/logo.png" width={80} height={80} alt="logo" />
        Recipe
      </div>
      <ul className="flex items-center space-x-5">
        <li>
          <Menu
            type="meal"
            options={[
              { label: "Breakfast", link: "/breakfast" },
              { label: "Lunch", link: "/lunch" },
              { label: "Dinner", link: "/dinner" },
              { label: "Drinks", link: "/drinks" },
              { label: "Snacks", link: "/snacks" },
              { label: "Appetizers", link: "/appetizers" },
            ]}
          >
            Meal
          </Menu>
        </li>
        <li>
          <Menu
            type="cuisine"
            options={[
              { label: "British", link: "/British" },
              { label: "Italian", link: "/italian" },
              { label: "Indian", link: "/indian" },
              { label: "Thai", link: "/thain" },
              { label: "Japanese", link: "/japanese" },
              { label: "Korean", link: "/korean" },
            ]}
          >
            Cuisine
          </Menu>
        </li>
        <li>
          <Menu
            type="dietary"
            options={[
              { label: "Vegan", link: "/vegan" },
              { label: "Healthy", link: "/healthy" },
              { label: "Low Carb", link: "/low_carb" },
            ]}
          >
            Dietary
          </Menu>
        </li>
        <li>
          <Menu
            type="appliance"
            options={[
              { label: "Oven", link: "/oven" },
              { label: "Pressure Cooker", link: "/pressure_cooker" },
              { label: "Blender", link: "/blender" },
              { label: "Microwave", link: "/microwave" },
            ]}
          >
            In The Kitchen
          </Menu>
        </li>
        <li>
          <Menu
            type="holiday"
            options={[
              { label: "Christmas", link: "/christmas" },
              { label: "Halloween", link: "/halloween" },
              { label: "Easter", link: "/easter" },
              { label: "Thanksgiving", link: "/thanksgiving" },
              { label: "Spring Holiday", link: "/spring_holiday" },
            ]}
          >
            Holidays & Seasons
          </Menu>
        </li>
      </ul>

      <SearchInput />
    </nav>
  );
}
