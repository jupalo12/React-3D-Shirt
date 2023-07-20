/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import React from "react";
import state from "../store";
import { CustomButton } from "../components/";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="public/threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div {...headContainerAnimation} className="home-content">
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET´S <br className="x1:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Crie uma camisa unica e exclusiva com a mais nova ferramenta de
                customização 3D.
                <strong>Solte sua criatividade</strong>
                {""} e defina seu estilo.
              </p>
              <CustomButton
                type="filled"
                title="Customize"
                handleClick={() => state.intro = false}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
