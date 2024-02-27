import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
}

const Page = ({ title, children }: PropsWithChildren<PageProps>) => {
  return (
    <div id="page">
      <h1 style={{ fontSize: 21, fontWeight: 700 }}>ㅇㅇ</h1>
      {children}
    </div>
  );
};

export default Page;
