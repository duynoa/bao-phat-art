import Skeleton from "@mui/material/Skeleton";

const Partner = () => {
  return (
    <div className="bg-bg-partner bg-gray-100 bg-repeat py-10">
      <div className="container mx-auto max-w-screen-xl px-4 gap-10 flex flex-col">
        <div className="text-gray-900 text-2xl md:text-4xl font-bold">
          Đối tác cùng các <br className="hidden md:block" />
          Doanh nghiệp lớn
          <h3 className="text-primary">,,,,,,,,</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-8">
          <Skeleton variant="rectangular" height={100} width="100%" />
          <Skeleton variant="rectangular" height={100} width="100%" />
          <Skeleton variant="rectangular" height={100} width="100%" />
          <Skeleton variant="rectangular" height={100} width="100%" />
          <Skeleton variant="rectangular" height={100} width="100%" />
          <Skeleton variant="rectangular" height={100} width="100%" />
          <Skeleton variant="rectangular" height={100} width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
