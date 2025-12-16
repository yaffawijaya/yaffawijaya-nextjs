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
            transition={{ duration: 0.6, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
