import {cleanup, render} from '@testing-library/react';
import { App } from './App';
// Note: running cleanup afterEach is done automatically foryou in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
it('App contains text "hello world"', () => {
    const { queryByText } = render(<App />);
    expect(queryByText(/Hello world/i)).toBeTruthy();
});
