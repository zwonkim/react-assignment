import React, { useEffect, useState } from "react";
import { ITodo } from './useCustomQuery';

interface IUseCustomMutationReturn {
  data: any;
  isLoading: boolean;
  refetch: () => Promise<any>;
}

const useCustomMutation = (mutationFn: (input:string[]) => Promise<any>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();

  const mutate = async (arg:string[]) => {
    console.log(arg)
    setIsLoading(true)

    if(arg.length === 2) {
      await mutationFn(arg)
      .then((todo:ITodo) => todo.title === arg[1])
      return
    }

    await mutationFn([...arg])
      .then((todos) => {
        setData(todos)
      })
    setIsLoading(false)
    return data
  };

  return { data, isLoading, mutate };
};

export default useCustomMutation;


