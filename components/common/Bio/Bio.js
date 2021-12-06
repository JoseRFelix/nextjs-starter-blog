import clsx from "clsx";

import Image from "next/image";

import { getSiteMetaData } from "@utils/helpers";
import profilePicture from "@/content/assets/profile.png";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx("flex items-center space-x-3", className)}>
      <div className="flex-shrink-0 mb-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          width={56}
          height={56}
          src={profilePicture}
          alt="Profile"
          placeholder="blur"
        />
      </div>

      <p className="text-base leading-7">
        Written by <b className="font-semibold">{author.name}</b>{" "}
        {author.summary}{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow him on twitter
        </a>
      </p>
    </div>
  );
}
