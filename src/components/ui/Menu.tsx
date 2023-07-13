import { DropdownMenuDesktop, DropdownMenuMobile } from "./dropdown-menu";

export function MobileMenu() {
  return (
    <ul className="flex flex-col items-center w-full">
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
          type="meal"
          options={[
            { label: "Breakfast", link: "/tags/breakfast" },
            { label: "Lunch", link: "/tags/lunch" },
            { label: "Dinner", link: "/tags/dinner" },
            { label: "Drinks", link: "/tags/drinks" },
            { label: "Snacks", link: "/tags/snacks" },
            { label: "Appetizers", link: "/tags/appetizers" },
          ]}
        >
          Meal
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
          type="cuisine"
          options={[
            { label: "British", link: "/tags/british" },
            { label: "Italian", link: "/tags/italian" },
            { label: "Indian", link: "/tags/indian" },
            { label: "Thai", link: "/tags/thain" },
            { label: "Japanese", link: "/tags/japanese" },
            { label: "Korean", link: "/tags/korean" },
          ]}
        >
          Cuisine
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
          type="dietary"
          options={[
            { label: "Vegan", link: "/tags/vegan" },
            { label: "Healthy", link: "/tags/healthy" },
            { label: "Low Carb", link: "/tags/low_carb" },
          ]}
        >
          Dietary
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
          type="appliance"
          options={[
            { label: "Oven", link: "/tags/oven" },
            { label: "Pressure Cooker", link: "/tags/pressure_cooker" },
            { label: "Blender", link: "/tags/blender" },
            { label: "Microwave", link: "/tags/microwave" },
          ]}
        >
          In The Kitchen
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
          type="holiday"
          options={[
            { label: "Christmas", link: "/tags/christmas" },
            { label: "Halloween", link: "/tags/halloween" },
            { label: "Easter", link: "/tags/easter" },
            { label: "Thanksgiving", link: "/tags/thanksgiving" },
            { label: "Spring Holiday", link: "/tags/spring_holiday" },
          ]}
        >
          Holidays & Seasons
        </DropdownMenuMobile>
      </li>
    </ul>
  );
}

export function DesktopMenu() {
  return (
    <ul className="hidden lg:flex items-center space-x-2 xl:space-x-5">
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
          type="meal"
          options={[
            { label: "Breakfast", link: "/tags/breakfast" },
            { label: "Lunch", link: "/tags/lunch" },
            { label: "Dinner", link: "/tags/dinner" },
            { label: "Drinks", link: "/tags/drinks" },
            { label: "Snacks", link: "/tags/snacks" },
            { label: "Appetizers", link: "/tags/appetizers" },
          ]}
        >
          Meal
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
          type="cuisine"
          options={[
            { label: "British", link: "/tags/british" },
            { label: "Italian", link: "/tags/italian" },
            { label: "Indian", link: "/tags/indian" },
            { label: "Thai", link: "/tags/thain" },
            { label: "Japanese", link: "/tags/japanese" },
            { label: "Korean", link: "/tags/korean" },
          ]}
        >
          Cuisine
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
          type="dietary"
          options={[
            { label: "Vegan", link: "/tags/vegan" },
            { label: "Healthy", link: "/tags/healthy" },
            { label: "Low Carb", link: "/tags/low_carb" },
          ]}
        >
          Dietary
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
          type="appliance"
          options={[
            { label: "Oven", link: "/tags/oven" },
            { label: "Pressure Cooker", link: "/tags/pressure_cooker" },
            { label: "Blender", link: "/tags/blender" },
            { label: "Microwave", link: "/tags/microwave" },
          ]}
        >
          In The Kitchen
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
          type="holiday"
          options={[
            { label: "Christmas", link: "/tags/christmas" },
            { label: "Halloween", link: "/tags/halloween" },
            { label: "Easter", link: "/tags/easter" },
            { label: "Thanksgiving", link: "/tags/thanksgiving" },
            { label: "Spring Holiday", link: "/tags/spring_holiday" },
          ]}
        >
          Holidays & Seasons
        </DropdownMenuDesktop>
      </li>
    </ul>
  );
}
