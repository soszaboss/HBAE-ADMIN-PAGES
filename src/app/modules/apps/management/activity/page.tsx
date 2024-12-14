import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'


const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Gestion',
    path: '/gestion/activities',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ActivitiesPage = () => {
  return (
  
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Activité</PageTitle>
      <div className='h-100 d-flex flex-center flex-column justify-items-center'>
          Activités
      </div>
    </>

  )
}

export default ActivitiesPage
