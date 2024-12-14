import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'


const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Gestion',
    path: '/gestion/subscriptions',
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

const SubscriptionPage = () => {
  return (
  
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Abonnement</PageTitle>
      <div className='h-100 d-flex flex-center flex-column justify-items-center'>
          Abonnement
      </div>
    </>

  )
}

export default SubscriptionPage
