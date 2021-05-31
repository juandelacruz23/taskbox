import { Provider } from 'react-redux';
import { ConnectedInboxScreen as InboxScreen } from './components/InboxScreen';
import store from "./lib/redux";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
