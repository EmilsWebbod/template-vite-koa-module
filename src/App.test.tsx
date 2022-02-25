import { test, assert } from 'vitest';
import renderer, {ReactTestRendererJSON} from 'react-test-renderer';
import App from './App';

test('App.tsx', () => {
  const component = renderer.create(<App />);
  const json = component.toJSON() as ReactTestRendererJSON;
  assert.equal(json.type, 'div');
});