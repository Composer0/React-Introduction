import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//CHALLENGE DEFEATED!!!

// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emojiTerm => 
          (<Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

//with this particular challenge you can remove both the curly brackets and the return keyword. The reason is ecause the Entry component is treated as a single line of code. Only a single element is being returned. It's layout currently is for best practice.

export default App;
