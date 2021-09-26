import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useSWReducer } from '@hooks/useSWReducer';

const Home = () => {
  const { data, isLoading, dispatch } = useSWReducer('test', {
    count: 1,
    lists: [],
  });
  const handleClick = useCallback((id) => {
    if (!data) return;
    let arr = data.lists.map((item) => {
      if (item.id === id) {
        if (!item.number) {
          item['number'] = 1;
        } else {
          item['number'] = 999;
        }
        return item;
      } else {
        return item;
      }
    });
    dispatch({ ...data, lists: arr });
  }, [data]);
  console.log(data);
  return (
    <div className='container max-w-screen-md mx-auto text-sans'>
      <Head>
        <title>ROMS</title>
        <meta property='og:title' content='ROMS' />
      </Head>
      <div className='w-full p-4'>
        {data &&
          data.lists.filter((v) => {
            return !v.number;
          }) !== [] && (
            <>
              <h2 className='text-xl'>受付</h2>
              <div className='w-full text-gray-900 grid grid-cols-4'>
                {data &&
                  data.lists
                    .filter((v) => {
                      return !v.number;
                    })
                    .map((item) => {
                      return (
                        <button
                          className='w-full h-full py-2 px-4 border border-yellow-700 bg-yellow-200 text-xl text-center font-extrabold rounded-lg shadow'
                          key={item.id}
                          onClick={() => { handleClick(item.id) }}
                        >
                          {item.id}
                        </button>
                      );
                    })}
              </div>
            </>
          )}
      </div>
      <div className='w-full p-4'>
        {data &&
          data.lists.filter((v) => {
            return v.number === 999;
          }) !== [] && (
            <>
              <h2 className='text-xl'>完了</h2>
              <div className='w-full text-gray-900 grid grid-cols-4'>
                {data &&
                  data.lists
                    .filter((v) => {
                      return v.number === 999;
                    })
                    .map((item) => {
                      return (
                        <div className='py-2 px-4 border border-yellow-700 bg-yellow-200 text-xl text-center font-extrabold rounded-lg shadow'>
                          {item.id}
                        </div>
                      );
                    })}
              </div>
            </>
          )}
      </div>
      <div className='fixed bottom-0 left-0 w-full h-60 bg-blue-100'>
        <div className='w-full h-full pb-8 grid grid-cols-4'>
          <div className='relative bg-blue-200 w-full h-full'>
            <div className='text-2xl font-extrabold absolute top-0 left-0 bg-blue-300 py-4 px-8 rounded'>
              1番
            </div>
            <div className='pt-24 px-20'>
              {data &&
                data.lists.map((item) => {
                  if (item.number === 1) {
                    return (
                      <div>
                        <button
                          className='w-full h-full py-2 px-4 border border-yellow-700 bg-yellow-200 text-xl text-center font-extrabold rounded-lg shadow'
                          key={item.id}
                          onClick={() => { handleClick(item.id) }}
                        >
                          {item.id}
                        </button>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <div className='relative bg-blue-200 w-full h-full'>
            <div className='text-2xl font-extrabold absolute top-0 left-0 bg-blue-300 py-4 px-8 rounded'>
              2番
            </div>
            <div className='pt-24 px-20'>
              {data &&
                data.lists.map((item) => {
                  if (item.number === 2) {
                    return (
                      <div className='py-2 px-4 border border-yellow-700 bg-yellow-200 text-xl text-center font-extrabold rounded-lg shadow'>
                        {item.id}
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <div className='relative bg-blue-200 w-full h-full'>
            <div className='text-2xl font-extrabold absolute top-0 left-0 bg-blue-300 py-4 px-8 rounded'>
              3番
            </div>
            <div className='pt-24 px-20'>
              {data &&
                data.lists.map((item) => {
                  if (item.number === 3) {
                    return (
                      <div className='py-2 px-4 border border-yellow-700 bg-yellow-200 text-xl text-center font-extrabold rounded-lg shadow'>
                        {item.id}
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <div className='relative bg-blue-200 w-full h-full'>
            <div className='text-2xl font-extrabold absolute top-0 left-0 bg-blue-300 py-4 px-8 rounded'>
              4番
            </div>
            <div className='pt-24 px-20'>
              {data &&
                data.lists.map((item) => {
                  if (item.number === 4) {
                    return (
                      <div className='py-2 px-4 border border-yellow-700 bg-yellow-200 text-xl text-center font-extrabold rounded-lg shadow'>
                        {item.id}
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
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
