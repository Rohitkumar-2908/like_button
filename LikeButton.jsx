import { useState } from 'react'
export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(!liked);
  return (
    <button onClick={toggleLiked}
    style={{ fontsize: '24px', color: "red", background: "transparent", padding: "10px 20px", cursor: "pointer" }}>
      {liked ? '❤️' : '🤍'}

    </button>
  );
}
export default LikeButton;