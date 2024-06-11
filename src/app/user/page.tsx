import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import UserOption from "@/components/user/UserOption";
import UserProfile from "@/components/user/UserProfile";
import userOptions from "@/data/userOptions";

export default function UserPage() {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div className="bg-green relative mb-4 flex flex-col p-8 w-full">
        <Link href="/">
          <FontAwesomeIcon
            icon={faTimes}
            className="mb-8 self-start w-8 h-8 text-white"
          />
        </Link>
        <UserProfile name="Eduardo Chacón" photoUrl="/svgs/onboarding1.svg" />
      </div>
      <div className="flex flex-col w-full">
        {userOptions.map((option, index) => (
          <UserOption
            key={index}
            href={option.href}
            icon={option.icon}
            iconColor={option.iconColor}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </div>
  );
}