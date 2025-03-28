"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import LogoScroll from "@/components/LogoScroll"

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string
    delay?: number
    width?: number
    height?: number
    rotate?: number
    gradient?: string
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                    )}
                />
            </motion.div>
        </motion.div>
    )
}

export default function BackgroundHero({
    badge = "Where Marketing Meets Influence",
    title1 = "Not Just Marketing",
    title2 = "We Create Experiences",
}: {
    badge?: string
    title1?: string
    title2?: string
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    }

    return (
        <div className="relative h-auto w-full flex items-center pt-24 justify-center overflow-hidden bg-black pb-14">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto text-center flex flex-col md:flex-row">
                    <div>
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                        >
                            <img src="/logo.jpg" alt="webuiltu" width={20} height={20} className="rounded-full" />
                            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
                        </motion.div>

                        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">{title1}</span>
                                <br />
                                <span
                                    className={cn(
                                        "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ",
                                    )}
                                >
                                    {title2}
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-xl mx-auto px-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-marketing-600 font-bold pb-5">
                                A premier marketing agency specializing in event organization and social media promotion to elevate your brand's presence.
                            </p>
                        </motion.div>

                        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="flex-wrap gap-8 justify-center hidden md:flex md:mt-16">
                            <a href="#services" className="btn-marketing flex items-center">
                                Our Services
                            </a>
                            <a href="#contact" className="px-6 py-3 border border-white/[0.08] rounded-md bg-white text-marketing-900 hover:border-marketing-300 transition-colors duration-300">
                                Get in Touch
                            </a>
                        </motion.div>

                    </div>

                    <div className="md:ml-60">
                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col gap-2 mt-8 md:mt-12 lg:-mt-8 md:justify-center items-center"
                        >
                            <img src="./logo.jpg" alt="logo" className="h-60 w-60 md:h-96 md:w-96 md:mt-14" />
                            <div className="w-[200px] h-[30px] mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white bg-opacity-80 backdrop-blur-sm animate-fade-in mx-auto flex items-center justify-center"
                                style={{ animationDelay: '0.3s' }}
                            >
                                Connect | Engage | Groww
                            </div>
                        </motion.div>
                    </div>
                </div>
                
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

        </div>
    )
}

