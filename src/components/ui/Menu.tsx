import { DropdownMenuDesktop, DropdownMenuMobile } from "./DropdownMenu";

export function MobileMenu() {
  return (
    <ul className="flex flex-col items-center w-full">
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
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
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
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
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
          type="dietary"
          options={[
            { label: "Vegan", link: "/vegan" },
            { label: "Healthy", link: "/healthy" },
            { label: "Low Carb", link: "/low_carb" },
          ]}
        >
          Dietary
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
          type="appliance"
          options={[
            { label: "Oven", link: "/oven" },
            { label: "Pressure Cooker", link: "/pressure_cooker" },
            { label: "Blender", link: "/blender" },
            { label: "Microwave", link: "/microwave" },
          ]}
        >
          In The Kitchen
        </DropdownMenuMobile>
      </li>
      <li className="group cursor-pointer w-full">
        <DropdownMenuMobile
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
            { label: "Breakfast", link: "/breakfast" },
            { label: "Lunch", link: "/lunch" },
            { label: "Dinner", link: "/dinner" },
            { label: "Drinks", link: "/drinks" },
            { label: "Snacks", link: "/snacks" },
            { label: "Appetizers", link: "/appetizers" },
          ]}
        >
          Meal
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
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
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
          type="dietary"
          options={[
            { label: "Vegan", link: "/vegan" },
            { label: "Healthy", link: "/healthy" },
            { label: "Low Carb", link: "/low_carb" },
          ]}
        >
          Dietary
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
          type="appliance"
          options={[
            { label: "Oven", link: "/oven" },
            { label: "Pressure Cooker", link: "/pressure_cooker" },
            { label: "Blender", link: "/blender" },
            { label: "Microwave", link: "/microwave" },
          ]}
        >
          In The Kitchen
        </DropdownMenuDesktop>
      </li>
      <li className="group cursor-pointer">
        <DropdownMenuDesktop
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
        </DropdownMenuDesktop>
      </li>
    </ul>
  );
}
