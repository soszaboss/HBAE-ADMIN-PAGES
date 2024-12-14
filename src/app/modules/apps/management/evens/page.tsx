import { PageLink, PageTitle } from "../../../../../_metronic/layout/core";

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: "Gestion",
    path: "/gestion/evens",
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

const EventsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Evenements</PageTitle>
      <div className="h-100 d-flex flex-center flex-column justify-items-center">
        Evenements
      </div>
    </>
  );
};

export default EventsPage;
