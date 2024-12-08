import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'
import EquipementsPage from './EquipementsPage'

const EquipementsWrapper = () => {
    return (
      <EnableSidebar>
        <PageTitle description='Vous avez 24 nouvelles abonnements' breadcrumbs={[]}>
          Salut, Noel
        </PageTitle>
        <EquipementsPage />
      </EnableSidebar>
    )
  }

export default EquipementsWrapper