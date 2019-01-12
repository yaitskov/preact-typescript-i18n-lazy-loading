import {h, Component} from 'preact';
import {Link} from 'preact-router';
import I18n from 'i18nline';

export default class Home extends Component {
  render() {
    return <div>
      <h1>
        This is home page
        <Link href='/profile/prateek'>Prateek</Link>
      </h1>
      <p translate="yes">hell world</p>
    </div>;
  }
}
