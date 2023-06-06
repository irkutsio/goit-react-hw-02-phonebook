export const FilterInput = ({ value, onChange }) => {
    return (<div>
        <label>Find Contact by name</label>
         <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
     
    );
  };