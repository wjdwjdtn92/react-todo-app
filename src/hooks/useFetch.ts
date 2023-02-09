import { useState, useEffect } from 'react';
import { ITodoItem } from '../components/TodoList/TodoItem';

interface IProps {
  url: string;
  method?: string;
  sendData?: {};
}

function useFetch({ url, method, sendData }: IProps) {
  const [data, setData] = useState<Array<ITodoItem>>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, {
      signal: abortCont.signal,
      method: method && 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      ...(sendData ?? { body: JSON.stringify(sendData) }),
    })
      .then(res => {
        if (!res.ok) {
          // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setError('');
      })
      .catch(err => {
        setError(err.message);
      });

    // abort the fetch. 완료되기 전에 DOM 요청 중단
    return () => abortCont.abort();
  }, [url]);

  return [data, setData, error] as const;
}

export default useFetch;
