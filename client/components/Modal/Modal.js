export default function Modal(props) {
  return (
    <div className="flex justify-center bg-white max-w-sm mx-auto mt-44">
      <div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
