import { useState } from "react";
import { motion } from "framer-motion";
import "./Toogler.css";

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

export default function Toggle({w=50 , children}) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
    <div className="switch" data-on={isOn} onClick={toggleSwitch} style={{width:w + 'px', marginBottom:'20px'}}>
      <motion.div className="handle" layout transition={spring} />
    </div>
    
      {
        isOn &&  children
      }
    </>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
