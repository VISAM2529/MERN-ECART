import React, { useState } from 'react'
import You from './You';
import YourOrder from './YourOrder';


function Profile() {
  return(
    <div className='flex items-center justify-center py-10'>
      <div className='flex bg-white w-11/12  shadow-2xl flex-col '>
          <You/>
          <YourOrder/>
        </div>
    </div>
  )
}

export default Profile