import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/Slices/Slices';
const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};

export default Filter;
