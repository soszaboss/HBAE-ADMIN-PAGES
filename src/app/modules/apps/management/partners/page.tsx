import { PageLink, PageTitle } from "../../../../../_metronic/layout/core";

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: "Gestion",
    path: "/gestion/partners",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const PartenersPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Partenairs</PageTitle>
      <div className="h-100 d-flex flex-center flex-column justify-items-center">
        Partners
      </div>
    </>
  );
};

export default PartenersPage;
