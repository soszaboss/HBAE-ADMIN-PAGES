
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
        to='/apps/user-management/users'
        icon='price-tag'
        title='Abonnements'
        fontIcon='bi-layers'
      />
        <AsideMenuItem
        to='/apps/user-management/users'
        icon='parcel-tracking'
        title='Activités'
        fontIcon='bi-layers'
      />
              <AsideMenuItem
        to='/apps/user-management/users'
        icon='support-24'
        title='Partenaires'
        fontIcon='bi-layers'
      />
                    <AsideMenuItem
        to='/apps/user-management/users'
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
        to='/apps/user-management/users'
        icon='lock'
        title='Autorisation'
        fontIcon='bi-layers'
      />
            <AsideMenuItem
        to='/apps/user-management/users'
        icon='setting-4'
        title='Abonnements et credits'
        fontIcon='bi-layers'
      />
                  <AsideMenuItem
        to='/apps/user-management/users'
        icon='some-files'
        title='Audit et logs'
        fontIcon='bi-layers'
      />
    </>
  )
}
