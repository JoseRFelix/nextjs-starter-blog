import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";

export default function Bio() {
  const { author, social } = getSiteMetaData();

  return (
    <div className="flex items-center my-12">
      <Image
        className="flex-shrink-0 w-12 h-12 mb-0 mr-3 rounded-full"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Profile"
      />
      <p className="mb-0 text-sm">
        Built by <b>{author.name}</b> {author.summary}{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow him on twitter
        </a>
      </p>
    </div>
  );
}
