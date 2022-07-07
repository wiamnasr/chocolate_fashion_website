import Typing from "react-typing-animation";
import React from "react";

const FounderMessageTyped = () => {
  return (
    <Typing speed={80}>
      <span>
        <Typing.Delay ms={1000} />
        Having relocated from Lebanon to the UK in 2020, I have brought with me
        a renewed vision for a future in which Chocolate Fashion Signature can
        reclaim its former glory, going above and beyond anything delivered
        before in this country. I have spent over a decade learning about and
        developing this totally unique market.
      </span>
    </Typing>
  );
};

export default FounderMessageTyped;
