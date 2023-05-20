import { useState, useCallback, useEffect, useMemo } from 'react';
import { getTweets, updateTweets } from 'services/Api';
import { CardList } from './CardList/CardList';
import { LoadMore } from './LoadMore/LoadMore';
import { scrollOnLoadMore } from 'utils/scrollOnLoadMore';
export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [filter] = useState('All');
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await getTweets();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const handleFollowing = useCallback((id, following) => {
    try {
      setUsers(prevUsers =>
        prevUsers.map(user => {
          if (user.id === id) {
            const updatedFollowers = following
              ? user.followers - 1
              : user.followers + 1;

            const updatedUser = {
              ...user,
              followers: updatedFollowers,
              following: !user.following,
            };

            updateTweets(id, updatedFollowers, updatedUser.following);

            return updatedUser;
          }
          return user;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const handleFilterChange = useCallback(filterValue => {
  //   setFilter(filterValue);
  // }, []);

  const filteredUsers = useMemo(() => {
    let filtered = users;

    // switch (filter) {
    //   case 'All':
    //     break;

    //   case 'Follow':
    //     filtered = filtered.filter(user => !user.following);
    //     break;

    //   case 'Followings':
    //     filtered = filtered.filter(user => user.following);
    //     break;

    //   default:
    //     filtered;
    //     break;
    // }

    const endIndex = page * 3;
    setShowLoadMore(endIndex);
    return filtered.slice(0, endIndex);
  }, [page, users]);

  const handleBtnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    scrollOnLoadMore();
  };

  const isLoadMoreVisible = showLoadMore === filteredUsers.length;

  return (
    <div>
      <CardList users={filteredUsers} onClick={handleFollowing} />
      {isLoadMoreVisible && (
        <LoadMore handleBtnLoadMore={handleBtnLoadMore} disabled={isLoading} />
      )}
    </div>
  );
};
