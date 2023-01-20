import { Link } from 'react-router-dom';

import NotFoundImage from '../../images/404-illustration.svg';
import classNames from '../../utils/classnames';

function PageNotFound() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">
      <div className="max-w-2xl m-auto mt-16">
        <div className="text-center px-4">
          <div className="inline-flex mb-8">
            <img
              src={NotFoundImage}
              width="176"
              height="176"
              alt="404 illustration"
            />
          </div>
          <div className="mb-6 text-white font-bold">
            Hmm...this page doesn’t exist. Try searching for something else!
          </div>
          <Link
            to="/"
            className={classNames(
              'rounded-md py-2 px-4',
              'text-white font-oxigen ',
              'bg-gradient-to-b from-transparent to-secondary',
            )}>
            Back To Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
