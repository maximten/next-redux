import Layout from '../components/Layout.jsx'
import AppContainer from '../containers/AppContainer.jsx'
import CounterContainer from '../containers/CounterContainer.jsx'

export default () => (
  <Layout title="Hello">
    <AppContainer title="Hello">
      <h1>Hello</h1>
      <CounterContainer/>
    </AppContainer>
  </Layout>
)