import React, { useEffect, useState } from "react";
import { ITodo } from '.';

interface IUseCustomMutationReturn {
  data: any;
  isLoading: boolean;
  refetch: () => Promise<any>;
}

// '(todoId: string, todoTitle: string) => Promise<any>' 형식의 인수는 '(input: string, input2?: string | undefined) => Promise<any>' 형식의 매개 변수에 할당될 수 없습니다.
//   'todoTitle' 및 'input2' 매개 변수의 형식이 호환되지 않습니다.
//     'string | undefined' 형식은 'string' 형식에 할당할 수 없습니다.
//       'undefined' 형식은 'string' 형식에 할당할 수 없습니다.ts(2345)

const useCustomMutation = (mutationFn: (input: string, input2?: string) => Promise<any>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();

  const mutate = async (arg: string, arg2?: string) => {
    setIsLoading(true)
    await mutationFn(arg, arg2).then((todos) => setData((olderTodos: ITodo[]) => [
      ...olderTodos,
      {
        title: arg2
      }
    ]))
    setIsLoading(false)
    return data
  };

  return { data, isLoading, mutate };
};

export default useCustomMutation;


