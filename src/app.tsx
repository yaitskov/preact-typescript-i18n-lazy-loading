import { h, Component } from "preact";
import {Router, Route, route} from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Home from './components/Home';

export interface AppProps {
  name: string;
}

interface AppState {
  name: string;
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { name: props.name };
  }

  Profile = async () => {
    const module = await import ('./components/Profile');
    return module.default;
  };

  Terms = async () => {
    const module = await import('./components/Terms');
    return module.default;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({...this.state, name: "Preact's componentDidMount worked as expected"});
    }, 2000);
  }
  render(props: AppProps, state: AppState) {
    return <div>
      <h1>props: {props.name} state: {state.name}</h1>
      <Router>
        <Route path='/' component={Home}/>
        <AsyncRoute path='/profile/:pid' getComponent={this.Profile} />
        <AsyncRoute path='/terms' getComponent={this.Terms} loading={()=>{return (<span>loading2...</span>);}}/>
      </Router>
    </div>;
  }
}
