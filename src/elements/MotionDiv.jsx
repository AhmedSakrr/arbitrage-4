import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


function MotionDiv({ children, styles }) {
    const control = useAnimation()
    const [ref, inView] = useInView({threshold: 1})

    const variant = {
        visible: {opacity: 1, transition: {duration: 0.5}},
        hidden: {opacity: 0}
    }


    useEffect(() => {
        if (inView) {
          control.start("visible");
        }
      }, [control, inView]);


    return (
            <motion.div
                ref={ref}
                variants={variant}
                initial="hidden"
                animate={control}
                style={styles}
                className="motion_div"
                >
                { children }
            </motion.div>
        )
}

export default MotionDiv