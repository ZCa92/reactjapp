import spinnerIMG from '../assets/loading.gif';

export default function Spinner() {
  return (
    <>
      <img
        src={spinnerIMG}
        alt="spinner"
        className="d-block m-auto"
        style={{ width: '200px' }}
      />
    </>
  );
}
