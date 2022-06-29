export default function ModalBody(props) {
    return (
      <div className="modal-body w-96 mx-auto bg-white p-11 rounded">
        { props.children }
      </div>
    );
  }