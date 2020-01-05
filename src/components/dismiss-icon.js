import React from "react";

const Dismiss = ({ title, fill }) => (
  <svg width="28px" height="28px" viewBox="0 0 28 28" fill={fill}>
    <title>{title}</title>
    <path d="M15.4 14l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L14 12.6l-3.3-3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.3 3.3-3.3 3.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l3.3-3.3 3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L15.4 14z" />
  </svg>
);

export default Dismiss;
