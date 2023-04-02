import type { NextPage } from 'next';
import Head from 'next/head';

const Task: NextPage = () => {

  return (
    <div className="flex h-full min-h-full flex-col ">
      <Head>
        <title>404 | page not found | Sparkle and Fold Laundry</title>
      </Head>
      <div
        className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter
         scrollbar-w-2 scrolling-touch flex w-full overflow-y-auto"
      >
        <div className="flex h-screen w-full flex-col justify-center text-center text-xl">
          404 | Page Not found Or NOT ALLOWED
        </div>
      </div>
    </div>
  );
};

export default Task;
