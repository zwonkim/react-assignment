import React, { useEffect, useState } from "react";
import { getTodos } from './api';

export interface ITodo {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IUseCustomQueryReturn {
  data: ITodo[];
  isLoading: boolean;
  refetch: () => void;
}

export type TFetcher = () => Promise<ITodo[]>;
type TUseCustomQuery = () => IUseCustomQueryReturn;

const useCustomQuery: TUseCustomQuery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ITodo[]>([]);
  const refetch = async () => {
    setIsLoading(false)
    await getTodos().then((todos) => setData(todos))
    setIsLoading(true)
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, isLoading, refetch };
};

export default useCustomQuery;