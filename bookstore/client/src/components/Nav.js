import React, { useState } from 'react';


function navBar () {

    return (

<nav>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/search">About</Link>
  </li>
  <li>
    <Link to="/saved">Users</Link>
  </li>
</ul>
</nav>

    )}

    export default navBar;

