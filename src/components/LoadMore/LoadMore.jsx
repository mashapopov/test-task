// import { Loader } from 'components/Loader/Loader';
import { Button } from './LoadMore.styled';
export const LoadMore = ({ handleBtnLoadMore, disabled }) => {
  return (
    <Button
      type="button"
      disabled={disabled}
      onClick={() => handleBtnLoadMore()}
    >
      {disabled ? 'Load More...' : 'Load More'}
    </Button>
  );
};
