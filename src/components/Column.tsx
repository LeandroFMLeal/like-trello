import { Card } from "./Card";

export const Column = () => {
  return (
    <div className="mt-8 ml-6 flex shrink-0 grow-0 basis-[360px] flex-col rounded-md  bg-blue-100">
      <header className="mb-2 rounded-t-md bg-blue-zodiac-800 p-1 text-center text-white">
        List Title
      </header>
      <ul className="px-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};
