import Image from "./Image";

export default function Bio() {
  return (
    <div className="flex items-center my-12">
      <Image
        className="w-12 h-12 mr-3 rounded-full"
        childProps={{
          img: {
            className: "mb-0 w-12 h-12 max-w-none rounded-full",
          },
          preview: {
            className: "mb-0 w-12 h-12 max-w-none rounded-full",
          },
        }}
        src={require("../content/assets/profile.png")}
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
