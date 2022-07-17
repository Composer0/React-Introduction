import React from 'react';

function Detail(props) {
    return <p className="info">{props.detailInfo}</p> //detailInfo comes from the object name used on card. Similar to how we have been using name. It is allowed to mutate however. That is why when you look on the card component that you see detailInfo being set as equal to another value.
}

export default Detail;