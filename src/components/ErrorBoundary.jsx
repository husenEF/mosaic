import React from 'react';
import PageNotFound from '../pages/utility/PageNotFound';
import BoxAnimate from './box/animate';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.error({ error, errorInfo });
    this.setState((prev) => ({ ...prev, errorMessage: error?.message }));
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <BoxAnimate className="h-screen items-center flex">
          <PageNotFound message={this.state?.errorMessage} />
        </BoxAnimate>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
