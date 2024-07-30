import { Dispatch, SetStateAction } from "react";

export default function Jasem({
  name,
  setName,
}: {
  name?: string;
  setName: Dispatch<SetStateAction<string>>;
}) {
  setName('ali');
  return <div>hello {name} </div>;
}
