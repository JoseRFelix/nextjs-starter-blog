import Image from "./Image";

export default function Bio() {
  return (
    <div className="flex items-center my-12">
      <Image
        className="flex-shrink-0 w-12 h-12 mb-0 mr-3 rounded-full"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Profile"
      />
      <p className="mb-0 text-sm">
        Created by <b>Jose Felix</b> who works building clean user interfaces
        with React.{" "}
        <a href="https://twitter.com/Jose_R_Felix">Follow him on twitter</a>
      </p>
    </div>
  );
}
