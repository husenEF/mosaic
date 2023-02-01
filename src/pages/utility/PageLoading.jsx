import BoxAnimate from '../../components/box/animate';

function PageLoading() {
  return (
    <BoxAnimate className="h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">
        <div className="max-w-2xl m-auto mt-16">
          <div className="text-center px-4">
            <div className="inline-flex mb-8">
              <div
                className="w-12 h-12 rounded-full animate-spin
                  border-2 border-solid border-primary-50 border-b-transparent"
              />
            </div>
            <div className="mb-6 text-white font-bold">Loading page....</div>
          </div>
        </div>
      </div>
    </BoxAnimate>
  );
}

export default PageLoading;
