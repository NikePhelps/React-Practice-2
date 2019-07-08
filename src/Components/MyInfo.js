import React from "react"

function MyInfo() { 
    // when writing functionial components it's always good to use camel-casing and have the first word be capatilized
    //with functional components all you need to do is return the JSX that you want. good practice to put the JSX into ()
    return (
      <div>
          <h1>NikePhelps</h1>
          <p>I'm awesome and that's really all there is to it!</p>
          <ol>
              <li>California</li>
              <li>Amsterdam</li>
              <li>St.Tropez</li>
          </ol>
      </div>
    );
}

export default MyInfo