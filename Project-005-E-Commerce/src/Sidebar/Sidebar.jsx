import Category from './Categories/Category'
import Price from './Price/Price'
import Color from './Colors/Color'
import './Sidebar.css'

const Sidebar = ({handelChange}) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleChange={handelChange} />
      <Price handleChange={handelChange} />
      <Color handleChange={handelChange} />
    </section>
  )
}

export default Sidebar