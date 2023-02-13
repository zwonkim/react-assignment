import { TFetcher } from "./useCustomQuery";

const BASE_URL =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos";

const HEADERS = {
  "content-type": "application/json",
  apikey: "FcKdtJs202209",
  username: "KDT3_HwangIsaac",
};

// 삭제 요청하는 api
export const deleteTodos = (input:string[]) => {
  return fetch(`${BASE_URL}/${input[0]}`, {
    method: "DELETE",
    headers: HEADERS,
  }).then((res) => res.json());
};

// todo 리스트 목록을 가져오는 api
export const getTodos: TFetcher = () => {
  return fetch(BASE_URL, {
    method: "GET",
    headers: HEADERS,
  }).then((res) => res.json());
};

// todo 리스트 추가하는 api
export const postTodos = (input:string[]) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      title: input[0],
    }),
  })
  .then((res) => res.json());
};

// todo 수정하는 api
export const editTodos = (input:string[]) => {
  return fetch(`${BASE_URL}/${input[0]}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify({
      title: input[1],
      done: false,
    }),
  }).then((res) => res.json())
};
