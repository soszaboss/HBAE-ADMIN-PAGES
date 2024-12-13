
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='chart-simple'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Gestion</span>
        </div>
      </div>      
      <AsideMenuItem
        to='/gestion/users'
        icon='user'
        title='Utilisateurs'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/gestion/abonnements'
        icon='price-tag'
        title='Abonnements'
        fontIcon='bi-layers'
      />
        <AsideMenuItem
        to='/gestion/activities'
        icon='parcel-tracking'
        title='Activités'
        fontIcon='bi-layers'
      />
              <AsideMenuItem
        to='/gestion/parteners'
        icon='support-24'
        title='Partenaires'
        fontIcon='bi-layers'
      />
                    <AsideMenuItem
        to='/gestion/events'
        icon='calendar-2'
        title='Evenements'
        fontIcon='bi-layers'
      />
            <div className='menu-item'>
        <div className='menu-content pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Parametres</span>
        </div>
      </div>    
      <AsideMenuItem
        to='/settings/authorisations'
        icon='lock'
        title='Autorisation'
        fontIcon='bi-layers'
      />
            <AsideMenuItem
        to='/settings/subscriptions-and-credits'
        icon='setting-4'
        title='Abonnements et credits'
        fontIcon='bi-layers'
      />
                  <AsideMenuItem
        to='/settings/audit-and-logs'
        icon='some-files'
        title='Audit et logs'
        fontIcon='bi-layers'
      />
    </>
  )
}
