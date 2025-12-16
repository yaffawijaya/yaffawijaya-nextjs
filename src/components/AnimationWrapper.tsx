'use client';

import { motion } from 'framer-motion';

interface AnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const AnimationWrapper = ({ children, className = "", delay = 0 }: AnimationWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.1, 0.25, 1.0] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
