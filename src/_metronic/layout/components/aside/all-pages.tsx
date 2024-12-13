import { useIntl } from 'react-intl';

export function AllROutings() {
  const intl = useIntl();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Routings</h2>
      <div className="row g-3">
        <div className="col-md-4">
          <a href="/dashboard" className="btn btn-primary w-100">
            {intl.formatMessage({ id: 'MENU.DASHBOARD' })}
          </a>
        </div>
        <div className="col-md-4">
          <a href="/builder" className="btn btn-primary w-100">Layout Builder</a>
        </div>
        <div className="col-md-4">
          <a href="/equipements" className="btn btn-primary w-100">Equipements</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages" className="btn btn-secondary w-100">Pages</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/profile" className="btn btn-secondary w-100">Profile</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/profile/overview" className="btn btn-secondary w-100">Overview</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/profile/projects" className="btn btn-secondary w-100">Projects</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/profile/campaigns" className="btn btn-secondary w-100">Campaigns</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/profile/documents" className="btn btn-secondary w-100">Documents</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/profile/connections" className="btn btn-secondary w-100">Connections</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/wizards" className="btn btn-warning w-100">Wizards</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/wizards/horizontal" className="btn btn-warning w-100">Horizontal</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/pages/wizards/vertical" className="btn btn-warning w-100">Vertical</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/accounts" className="btn btn-info w-100">Accounts</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/account/overview" className="btn btn-info w-100">Overview</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/account/settings" className="btn btn-info w-100">Settings</a>
        </div>
        <div className="col-md-4">
          <a href="/error" className="btn btn-danger w-100">Errors</a>
        </div>
        <div className="col-md-4">
          <a href="/error/404" className="btn btn-danger w-100">Error 404</a>
        </div>
        <div className="col-md-4">
          <a href="/error/500" className="btn btn-danger w-100">Error 500</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/widgets" className="btn btn-success w-100">Widgets</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/widgets/lists" className="btn btn-success w-100">Lists</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/widgets/statistics" className="btn btn-success w-100">Statistics</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/widgets/charts" className="btn btn-success w-100">Charts</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/widgets/mixed" className="btn btn-success w-100">Mixed</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/widgets/tables" className="btn btn-success w-100">Tables</a>
        </div>
        <div className="col-md-4">
          <a href="/crafted/widgets/feeds" className="btn btn-success w-100">Feeds</a>
        </div>
        <div className="col-md-4">
          <a href="/apps/chat" className="btn btn-primary w-100">Chat</a>
        </div>
        <div className="col-md-4">
          <a href="/apps/chat/private-chat" className="btn btn-primary w-100">Private Chat</a>
        </div>
        <div className="col-md-4">
          <a href="/apps/chat/group-chat" className="btn btn-primary w-100">Group Chart</a>
        </div>
        <div className="col-md-4">
          <a href="/apps/chat/drawer-chat" className="btn btn-primary w-100">Drawer Chart</a>
        </div>
        <div className="col-md-4">
          <a href="/apps/user-management/users" className="btn btn-dark w-100">User Management</a>
        </div>
        <div className="col-md-4">
          <a
            href={`${import.meta.env.VITE_APP_PREVIEW_DOCS_URL}/changelog`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark w-100"
          >
            Changelog {import.meta.env.VITE_APP_VERSION}
          </a>
        </div>
      </div>
    </div>
  );
}
