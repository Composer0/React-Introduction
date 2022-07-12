import React from "react";
import {Entry} from "./Entry.jsx";

function CreateEntry(emojipedia) {
    return <
    Entry
    key={emojipedia.id}
    emoji={emojipedia.emoji}
    imgURL={emojipedia.imgURL}
    name={emojipedia.name}
    meaning={emojipedia.meaning}
    />;

};

export {CreateEntry}