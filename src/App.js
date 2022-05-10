import { AnimatePresence, motion } from "framer-motion";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const Page1 = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    
  >
    <div style={{ ...styles.page, ...styles.page1}}>
      <p style={styles.copy}>This is page 1</p>
      <Link to="/page2" style={{ ...styles.copy, ...styles.link}}>Go to page 2</Link>
    </div>
  </motion.div>
)

const Page2 = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div style={{ ...styles.page, ...styles.page2}}>
      <p style={styles.copy}>This is page 2</p>
      <Link to="/page1" style={{ ...styles.copy, ...styles.link}}>Go to page 1</Link>
    </div>
  </motion.div>
)

function App() {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
    </Routes>
    </AnimatePresence>
  )
}

const styles ={
  page: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100vw`,
    height: `100vh`,
    flexGrow: 1,
    color: `white`,
    overflow: `none`
  },
  page1: {
    backgroundColor: `red`
  },
  page2: {
    backgroundColor: `blue`
  },
  link: {
    color: `white`,
    cursor: `pointer`
  }
}

export default App