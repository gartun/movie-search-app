import { ErrorBoundary } from "react-error-boundary";

import ErrorUI from "./ErrorUI";

const ErrBoundary = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorUI}>{children}</ErrorBoundary>
);

export default ErrBoundary;
