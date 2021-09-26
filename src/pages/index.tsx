import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useSWReducer } from '@hooks/useSWReducer';

const Home = () => {
  const { data, isLoading, dispatch } = useSWReducer('test', {
    count: 1,
    lists: [],
  });
  console.log(data);
  const handleClick = () => {
    dispatch({
      count: data.count + 1,
      lists: [...data.lists, { id: data.count }],
    });
  };
  return (
    <div className='container max-w-screen-md mx-auto h-full text-sans'>
      <Head>
        <title>ROMS</title>
        <meta property='og:title' content='ROMS' />
      </Head>

      <div className='w-full h-screen flex justify-center items-center content-center'>
        {data && (
          <>
            <div className="text-center">
              <h1 className="text-2xl font-extrabold pb-8">受付の方は下のボタンを押してください</h1>
              <button
                onClick={handleClick}
                className='text-6xl font-extrabold border border-blue-500 bg-blue-400 px-40 py-28 rounded-xl shadow'
              >
                {data.count}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;
