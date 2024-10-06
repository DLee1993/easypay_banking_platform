"use client";

import CountUp from "react-countup";

const Animatedcounter = ({ amount }: { amount: number }) => {
    return (
        <span className="w-full">
            <CountUp start={0} end={amount} decimals={2} decimal="." separator="," prefix="£" duration={1} />
        </span>
    );
};
export default Animatedcounter;
