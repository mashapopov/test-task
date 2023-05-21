import { useState, useCallback, useEffect, useMemo } from 'react';
import { getTweets, updateTweets } from 'services/Api';
import { CardList } from 'components/CardList/CardList';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { BackLink } from 'components/BackLink/BackLink';
import { scrollOnLoadMore } from 'utils/scrollOnLoadMore';
// import Home from '../Home/Home';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const filteredUsers = useMemo(() => {
    let filtered = users;

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
    <main>
      <BackLink to="/">Go back</BackLink>
      <CardList users={filteredUsers} onClick={handleFollowing} />
      {isLoadMoreVisible && (
        <LoadMore handleBtnLoadMore={handleBtnLoadMore} disabled={isLoading} />
      )}
    </main>
  );
}
export default Tweets;
