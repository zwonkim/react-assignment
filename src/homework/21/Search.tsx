import { ISearchedResult } from './api';

interface ISearchProps {
  keyword: string,
  movie: ISearchedResult | undefined
}

const Search = ({ keyword, movie }: ISearchProps) => {
  return (
    <>
      <h2>keyword: {keyword}</h2>

      <ul>
        {
          movie?.items.map(item => <li key={item.id.videoId}>{item.snippet.title}</li>)
        }
      </ul>
    </>
  );
};

export default Search;
