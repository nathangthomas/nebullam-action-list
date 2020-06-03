import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const CheckBox = () => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    fetch('http://nathan.interview.nebullam.com:1880/tasks', {
      method: 'PUT',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:event.target.id.value,
        complete: 1
      })
    })
    .then(res=> res.json())
  }


  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}

        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}

export default CheckBox;
