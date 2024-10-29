import useHover from "./useHover";
// import withHover from "./withHover";
import withLoader from "./withLoader";

const DogImages = (props) => {
  const [hoverRef, hovering] = useHover();

  return (
    <div ref={hoverRef} {...props}>
      {hovering && (
        <div className="bg-purple-500 text-purple-300 font-bold transition-all">
          Hovering!
        </div>
      )}
      <div className="flex flex-wrap">
        {props?.data?.message?.map((dog, idx) => (
          <img className="w-1/3 object-cover" src={dog} alt="Dog" key={idx} />
        ))}
      </div>
    </div>
  );
};

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
