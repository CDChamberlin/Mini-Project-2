import { useState } from "react";

export default function Profile(user) {
const [currentUser, setUser] = useState(user)
return (
    <>
      <h1>{currentUser.name}</h1>
      <img
        className="avatar"
        src={currentUser.imageUrl}
        alt={'Photo of ' + currentUser.name}
        style={{
          width: currentUser.imageSize,
          height: currentUser.imageSize
        }}
      />
    </>
  );
}