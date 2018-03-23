import Header from './Header.jsx'

export default ({ children, title }) => (
  <div>
    <Header title={ title }/>
    { children }
  </div>
)