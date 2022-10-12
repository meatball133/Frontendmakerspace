interface FullName {
  name: string;
  status: string;
}

const Page = ({ name, status }:FullName) => {
  return (
    <>
      <span>{`${name} ${status}`}</span>
      <br />
    </>
  );
};
export default Page;
